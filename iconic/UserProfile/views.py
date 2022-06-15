from django.shortcuts import render

from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Wallet, Resume, Cities, Professions, Followers, Likes
from .serializers import CustomWalletSerializer, CustomResumeSerializer, ProfessionsSerializer, CitiesSerializer, \
    CustomFollowersSerializer, LikesSerializer

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
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        user_id = request.data['user_id']
        number_of_followers = len(Followers.objects.filter(user_id=user_id))
        return Response({"user_id": user_id, "number_of_followers": number_of_followers},
                        status=status.HTTP_200_OK)


# A view for getting, adding and deleting followers
class FollowersGetAddDeleteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user_id = request.data['user_id']
        follower_id = request.user.id
        current_follower = Followers.objects.filter(user_id=user_id, follower=follower_id)
        if len(current_follower) != 0:
            data = CustomFollowersSerializer(current_follower[0]).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Пользователь не подписан на данного пользователя"},
                            status=status.HTTP_400_BAD_REQUEST)

    #  for adding
    def post(self, request):
        user_id = request.data['user_id']
        follower_id = request.user.id
        data = {"user_id": user_id, "follower": follower_id}
        serializer = CustomFollowersSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        Followers.objects.get(user_id=request.data['user_id'], follower=request.user.id).delete()
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
        resume = Resume.objects.get(user_id=request.data["user_id"])
        data = CustomResumeSerializer(resume).data

        return Response(data, status=status.HTTP_200_OK)


# View for changing and adding a profession
class ProfessionsEdit(APIView):

    # Method for getting profession by id
    def get(self, request):
        profession = Professions.objects.get(id=request.data['id'])
        serializer = ProfessionsSerializer(profession)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Method for adding profession
    def post(self, request):
        serializer = ProfessionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for changing profession by id
    def put(self, request):
        profession = Professions.objects.get(id=request.data['id'])
        serializer = ProfessionsSerializer(profession, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for deliting profession by id
    def delete(self, request):
        Professions.objects.get(id=request.data['id']).delete()
        return Response(status=status.HTTP_200_OK)


# View for getting all professions
class ProfessionsGet(APIView):
    # Method for getting all professions
    def get(self, request):
        professions = Professions.objects.all()
        serializer = ProfessionsSerializer(professions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# View for changing and adding a city
class CitiesEdit(APIView):

    # Method for getting city by id
    def get(self, request):
        city = Cities.objects.get(id=request.data['id'])
        serializer = CitiesSerializer(city)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Method for adding city by id
    def post(self, request):
        serializer = CitiesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for changing city by id
    def put(self, request):
        city = Cities.objects.get(id=request.data['id'])
        serializer = CitiesSerializer(city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for deliting city by id
    def delete(self, request):
        Cities.objects.get(id=request.data['id']).delete()
        return Response(status=status.HTTP_200_OK)


# View for getting all cities
class CitiesGet(APIView):

    # Method for getting all cities
    def get(self, request):
        cities = Cities.objects.all()
        serializer = CitiesSerializer(cities, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LikesGetDeleteView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user_id = request.user.id
        post_id = request.data['post_id']
        current_Likes = Likes.objects.filter(user_id=user_id, post_id=post_id)
        if len(current_Likes) != 0:
            data = LikesSerializer(current_Likes[0]).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Лайков нема"},
                            status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        user_id = request.user.id
        post_id = request.data['post_id']
        data = {"user_id": user_id, "post_id": post_id}
        serializer = LikesSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        Likes.objects.get(user_id=request.user.id, post_id=request.data['post_id']).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
