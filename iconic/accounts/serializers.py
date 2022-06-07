from django.contrib.auth import get_user_model
from rest_framework import serializers, validators

from accounts.models import UserProfile

CustomUser = get_user_model()


# creating a serializer class
class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(
        write_only=True, validators=[validators.UniqueValidator(
            message='This email already exists',
            queryset=CustomUser.objects.all()
        )]
    )
    # here we specified the fields that we will return, and also prescribed the possibilities of using
    password = serializers.CharField(write_only=True)
    last_name = serializers.CharField(required=False)
    first_name = serializers.CharField(required=False)

    # class to fields that we return to the client
    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'email',
                  'password')


class CustomUserRetrieveSerializer(serializers.ModelSerializer):
    bio = serializers.CharField(required=False)

    class Meta:
        model = UserProfile
        fields = ('bio',)
