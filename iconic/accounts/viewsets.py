from django.contrib.auth import get_user_model
from rest_framework import permissions, viewsets

import sys
sys.path.append('../')
# IDE says that there is unresolved references, but ignore it
from UserProfile.serializers import WalletSerializer

from . import serializers

CustomUser = get_user_model()


# Let's define a viewset for working with models by copying from the view
class CustomUserModelViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CustomUserSerializer
    permission_classes = (permissions.AllowAny,)
    queryset = CustomUser.objects.all()

    def perform_create(self, serializer):
        instance = serializer.save()
        data = dict()
        data["user_id"] = instance.id
        data["total_amount"] = 0
        wal_ser = WalletSerializer(data=data)
        wal_ser.is_valid()
        wal_ser.save()
