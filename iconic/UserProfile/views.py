from django.shortcuts import render

from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Wallet, Resume, Followers
from .serializers import CustomWalletSerializer, CustomResumeSerializer, CustomFollowersSerializer
from . import serializers


# A view for reading the amount of money in the users wallet
class UserWalletView(APIView):
    serializer_class = serializers.CustomWalletSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        current_wallet = Wallet.objects.get(user_id=request.user.id)
        data = CustomWalletSerializer(current_wallet).data
        return Response(data, status=status.HTTP_200_OK)


# A view for reading the number of followers
class NumberOfFollowersView(APIView):
    def get(self, request):
        number_of_followers = Followers.objects.filter(user_id=request.user.id).count()
        return Response({"user_id": request.user.id, "number_of_followers": number_of_followers},
                        status=status.HTTP_200_OK)


# A view for getting, adding and deleting followers
class FollowersGetAddDeleteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user_id = request.data['user_id']
        follower_id = request.user.id
        current_follower = Followers.objects.get(user_id=user_id, follower=follower_id)
        if current_follower is not None:
            data = CustomFollowersSerializer(current_follower).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Пользователь не подписан на данного пользователя"},
                            status=status.HTTP_400_BAD_REQUEST)

    #  for adding
    def post(self, request):
        user_id = request.data['user_id']
        follower_id = request.user.id
        current_follower = Followers(user_id=user_id, follower=follower_id)
        data = CustomFollowersSerializer(current_follower).data
        serializer = CustomFollowersSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        Followers.object.get(user_id=request.data['user_id'], follower=request.user.id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# a view for changing and adding data to a resume
class UserResumeEditView(APIView):
    serializers_class = serializers.CustomResumeSerializer
    permissions_classes = (permissions.IsAuthenticated)

    #  for adding
    def post(self, request):
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = CustomResumeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # for changing
    def put(self, request):
        instance = Resume.objects.get(user_id=request.user.id)
        serializer = CustomResumeSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# view for reading a resume
class UserResumeGetView(APIView):
    serializers_class = serializers.CustomResumeSerializer
    permissions_classes = (permissions.AllowAny)

    # for getting
    def get(self, request):
        resume = Resume.objects.get(user_id=request.user.id)
        data = CustomResumeSerializer(resume).data
        return Response(data, status=status.HTTP_200_OK)
