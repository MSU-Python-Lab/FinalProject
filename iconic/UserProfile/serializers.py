from rest_framework import serializers
from .models import Wallet


# This is custom wallet serializer
class CustomWalletSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(read_only=True)
    total_amount = serializers.IntegerField()

    class Meta:
        model = Wallet
        fields = ('user_id', 'total_amount')
