from django.shortcuts import render

from django.contrib.auth import get_user_model
from rest_framework import generics, permissions

from . import serializers

CustomUser = get_user_model()


# A view for adding reading or modifying an individual record
class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = serializers.CustomUserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_update(self, serializer):
        instance = serializer.save()
        instance.set_password(instance.password)
        instance.save()

    def get_object(self):
        return self.request.user
