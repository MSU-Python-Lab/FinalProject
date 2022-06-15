from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

CustomUser = get_user_model()


# This is custom wallet serializer
class CustomWalletSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(read_only=True)
    total_amount = serializers.IntegerField()

    class Meta:
        model = Wallet
        fields = ('user_id', 'total_amount')


# This is custom followers serializer
class CustomFollowersSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects)
    follower = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects)

    class Meta:
        model = Followers
        fields = ('user_id', 'follower')


# This is custom resume serializer
class CustomResumeSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects, required=False)

    class Meta:
        model = Resume
        fields = ('user_id', 'about_me', 'hobby', 'work_experience',
                  'achievements', 'skills', 'city', 'profession_id')


# Professions serializer
class ProfessionsSerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Professions
        fields = ('name', 'id')


# Cities serializer
class CitiesSerializer(serializers.ModelSerializer):
    name = serializers.CharField()

    class Meta:
        model = Cities
        fields = ('name', 'id')


# This is custom post serializer
class CustomPostSerializer(serializers.ModelSerializer):
    user_id = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects)

    class Meta:
        model = Post
        fields = ('id', 'user_id', 'post_description', 'source', 'published', 'time_create')
