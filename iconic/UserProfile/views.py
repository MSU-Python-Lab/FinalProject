from django.shortcuts import render

from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Wallet, Resume, Cities, Professions
from .serializers import CustomWalletSerializer, CustomResumeSerializer, ProfessionsSerializer, CitiesSerializer
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


class ProfessionsEdit(APIView):
    
    def get(self, request):
        profession = Professions.objects.get(id=request.data['id'])
        serializer = ProfessionsSerializer(profession)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProfessionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def put(self, request):
        profession = Professions.objects.get(id=request.data['id'])
        serializer = ProfessionsSerializer(profession, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request):
        Professions.objects.get(id=request.data['id']).delete()
        return Response()


class ProfessionsGet(APIView):

    def get(self, request):
        professions = Professions.objects.all()
        serializer = ProfessionsSerializer(professions, many=True)
        return Response(serializer.data)


class CitiesEdit(APIView):

    def get(self, request):
        city = Cities.objects.get(id=request.data['id'])
        serializer = CitiesSerializer(city)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CitiesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def put(self, request):
        city = Cities.objects.get(id=request.data['id'])
        serializer = CitiesSerializer(city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request):
        Cities.objects.get(id=request.data['id']).delete()
        return Response()


class CitiesGet(APIView):

    def get(self, request):
        cities = Cities.objects.all()
        serializer = CitiesSerializer(cities, many=True)
        return Response(serializer.data)
