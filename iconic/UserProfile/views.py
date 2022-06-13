from django.shortcuts import render

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Wallet, Resume
from .serializers import CustomWalletSerializer, CustomResumeSerializer
from . import serializers


# A view for reading the amount of money in the users wallet
class UserWalletView(APIView):
    serializer_class = serializers.CustomWalletSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        current_wallet = Wallet.objects.get(user_id=request.user.id)
        data = CustomWalletSerializer(current_wallet).data
        return Response(data)


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
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)

    # for changing
    def put(self, request):
        instance = Resume.objects.get(user_id=request.user.id)
        serializer = CustomResumeSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)


# view for reading a resume
class UserResumeGetView(APIView):
    serializers_class = serializers.CustomResumeSerializer
    permissions_classes = (permissions.AllowAny)

    # for getting
    def get(self, request):
        resume = Resume.objects.get(user_id=request.user.id)
        data = CustomResumeSerializer(resume).data
        return Response(data)
