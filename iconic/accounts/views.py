from django.shortcuts import render

from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from validate_email import validate_email
from rest_framework.response import Response
from rest_framework import status

from . import serializers

CustomUser = get_user_model()


# A view for adding reading or modifying an individual record
class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = serializers.CustomUserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        if not validate_email(request.data["email"]):
            return Response({"email": "Данные не прошли проверку"}, status=status.HTTP_400_BAD_REQUEST)
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)
