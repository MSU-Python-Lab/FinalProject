from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *
from .serializers import *


# A view for reading the amount of money in the users wallet
class WalletView(APIView):
    serializer_class = WalletSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        try:
            current_wallet = Wallet.objects.get(user_id=request.user.id)
        except ObjectDoesNotExist:
            return Response("Кошелёк не найден", status=status.HTTP_404_NOT_FOUND)
        data = self.serializer_class(current_wallet).data
        return Response(data, status=status.HTTP_200_OK)


# A view for reading the number of followers
class NumberOfFollowersView(APIView):
    serializer_class = None
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        user_id = request.data['user_id']
        number_of_followers = len(Followers.objects.filter(user_id=user_id))
        data = {"user_id": user_id, "number_of_followers": number_of_followers}
        return Response(data, status=status.HTTP_200_OK)


# A view for getting, adding and deleting followers
class FollowersGetAddDeleteView(APIView):
    serializer_class = FollowersSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user_id = request.data['user_id']
        follower_id = request.user.id
        try:
            current_follower = Followers.objects.get(user_id=user_id, follower=follower_id)
        except ObjectDoesNotExist:
            return Response("Подписка не найдена", status=status.HTTP_204_NO_CONTENT)
        data = self.serializer_class(current_follower).data
        return Response(data, status=status.HTTP_200_OK)

    #  for adding
    def post(self, request):
        user_id = request.data['user_id']
        follower_id = request.user.id
        data = {"user_id": user_id, "follower": follower_id}
        serializer = self.serializer_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            Followers.objects.get(user_id=request.data['user_id'], follower=request.user.id).delete()
        except ObjectDoesNotExist:
            pass
        return Response(status=status.HTTP_200_OK)


# a view for changing and adding data to a resume
class UserResumeEditView(APIView):
    serializers_class = ResumeSerializer
    permission_classes = (permissions.IsAuthenticated, )

    #  for adding
    def post(self, request):
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = self.serializers_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # for changing
    def put(self, request):
        try:
            instance = Resume.objects.get(user_id=request.user.id)
        except ObjectDoesNotExist:
            return Response("Резюме для изменения не найдено", status=status.HTTP_404_NOT_FOUND)
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = self.serializers_class(instance, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# view for reading a resume
class UserResumeGetView(APIView):
    serializers_class = ResumeSerializer
    permission_classes = (permissions.AllowAny, )

    # for getting
    def get(self, request):
        try:
            resume = Resume.objects.get(user_id=request.data["user_id"])
        except ObjectDoesNotExist:
            return Response("Резюме не найдено", status=status.HTTP_404_NOT_FOUND)
        data = self.serializers_class(resume).data
        return Response(data, status=status.HTTP_200_OK)


# View for changing, reading and adding a profession
class ProfessionsEditView(APIView):
    serializers_class = ProfessionsSerializer
    permission_classes = (permissions.IsAuthenticated, ) # TODO change this

    # Method for getting profession by id
    def get(self, request):
        try:
            profession = Professions.objects.get(id=request.data['id'])
        except ObjectDoesNotExist:
            return Response("Профессия не найдена", status=status.HTTP_404_NOT_FOUND)
        serializer = self.serializers_class(profession)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Method for adding profession
    def post(self, request):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for changing profession by id
    def put(self, request):
        try:
            profession = Professions.objects.get(id=request.data['id'])
        except ObjectDoesNotExist:
            return Response("Профессия для изменения не найдена", status=status.HTTP_404_NOT_FOUND)
        serializer = self.serializers_class(profession, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for deliting profession by id
    def delete(self, request):
        try:
            Professions.objects.get(id=request.data['id']).delete()
        except ObjectDoesNotExist:
            pass
        return Response(status=status.HTTP_200_OK)


# View for getting all professions
class ProfessionsGetView(APIView):
    serializers_class = ProfessionsSerializer
    permission_classes = (permissions.AllowAny, )

    # Method for getting all professions
    def get(self, request):
        professions = Professions.objects.all()
        serializer = ProfessionsSerializer(professions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# View for changing and adding a city
class CitiesEditView(APIView):
    serializers_class = CitiesSerializer
    permission_classes = (permissions.IsAuthenticated, ) # TODO change this
    # Method for getting city by id
    def get(self, request):
        try:
            city = Cities.objects.get(id=request.data['id'])
        except ObjectDoesNotExist:
            return Response("Город не найден", status=status.HTTP_404_NOT_FOUND)
        serializer = self.serializers_class(city)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Method for adding city by id
    def post(self, request):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for changing city by id
    def put(self, request):
        try:
            city = Cities.objects.get(id=request.data['id'])
        except ObjectDoesNotExist:
            return Response("Город для изменения не найден", status=status.HTTP_404_NOT_FOUND)
        serializer = self.serializers_class(city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Method for deliting city by id
    def delete(self, request):
        try:
            Cities.objects.get(id=request.data['id']).delete()
        except ObjectDoesNotExist:
            pass
        return Response(status=status.HTTP_200_OK)


# View for getting all cities
class CitiesGetView(APIView):
    serializers_class = CitiesSerializer
    permission_classes = (permissions.AllowAny, ) # TODO change this
    # Method for getting all cities
    def get(self, request):
        cities = Cities.objects.all()
        serializer = self.serializers_class(cities, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# View for getting, creating and deleting like
class LikesGetDeleteView(APIView):
    serializers_class = LikesSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user_id = request.user.id
        post_id = request.data['post_id']
        try:
            current_like = Likes.objects.get(user_id=user_id, post_id=post_id)
        except ObjectDoesNotExist:
            return Response("Лайк не поставлен", status=status.HTTP_204_NO_CONTENT)
        data = self.serializers_class(current_like).data
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request):
        user_id = request.user.id
        post_id = request.data['post_id']
        data = {"user_id": user_id, "post_id": post_id}
        serializer = self.serializers_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            Likes.objects.get(user_id=request.user.id, post_id=request.data['post_id']).delete()
        except ObjectDoesNotExist:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
      

# A view for getting all users posts
class GetAllUserPostsView(APIView):
    serializers_class = PostSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        user_id = request.data['user_id']
        current_posts = Post.objects.filter(user_id=user_id)
        data = self.serializers_class(current_posts, many=True).data
        for dic in data:
            dic["likes"] = len(Likes.objects.filter(post_id=dic["id"]))
        return Response(data=data, status=status.HTTP_200_OK)


# A view for getting all information about post
class PostGetView(APIView):
    serializers_class = PostSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        post_id = request.data['id']
        try:
            current_post = Post.objects.get(id=post_id)
        except ObjectDoesNotExist:
            return Response("Пост не найден", status=status.HTTP_404_NOT_FOUND)
        data = self.serializers_class(current_post).data
        data["id"] = post_id
        data["likes"] = len(Likes.objects.filter(post_id=post_id))
        return Response(data, status=status.HTTP_200_OK)


# a view for changing, adding and deleting data to a post
class PostEditView(APIView):
    serializers_class = PostSerializer
    permissions_classes = (permissions.IsAuthenticated, )

    def post(self, request):
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = self.serializers_class(data=data)
        if serializer.is_valid():
            serializer.save()
            response_data = dict(serializer.data)
            response_data["likes"] = 0
            return Response(data=response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        try:
            instance = Post.objects.get(id=request.data["id"], user_id=request.user.id)
        except ObjectDoesNotExist:
            return Response("Пост для изменения не найден", status=status.HTTP_404_NOT_FOUND)
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = self.serializers_class(instance, data=data)
        if serializer.is_valid():
            serializer.save()
            response_data = dict(serializer.data)
            response_data["likes"] = len(Likes.objects.filter(post_id=request.data["id"]))
            return Response(data=response_data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        try:
            Post.objects.get(id=request.data['id'], user_id=request.user.id).delete()
        except ObjectDoesNotExist:
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)
      
# View for getting comment! adding, changing and deleting comment by authorize user
class CommentEditView(APIView):
    serializers_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticated,)

    # Method for adding comment
    def post(self, request):
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = self.serializers_class(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                            status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    # Method for changing comment
    def put(self, request):
        try:
            comment = Comment.objects.get(id=request.data['id'],
                                      user_id=request.user.id,
                                      post_id=request.data['post_id'])
        except ObjectDoesNotExist:
            return Response(
                "Не найден комментарий или авторизованный пользователь не является автором данного комментария",
                status=status.HTTP_404_NOT_FOUND)
        data = dict(request.data)
        data["user_id"] = request.user.id
        serializer = self.serializers_class(comment, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    # Method for deleting comment by id
    def delete(self, request):
        try:
            Comment.objects.get(id=request.data['id'],
                            user_id=request.user.id).delete()
        except ObjectDoesNotExist:
            pass
        return Response(status=status.HTTP_200_OK)


# View for getting all comments
class CommentsGetView(APIView):
    serializers_class = CommentSerializer
    permission_classes = (permissions.AllowAny,)

    # Method for getting all comments
    def get(self, request):
        comments = Comment.objects.filter(post_id=request.data['post_id'])
        serializer = self.serializers_class(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
 

# View for getting comment
class CommentGetView(APIView):
    serializers_class = CommentSerializer
    permission_classes = (permissions.AllowAny,)

    # Method for getting comment by id
    def get(self, request):
        try:
            comment = Comment.objects.get(id=request.data['id'])
        except ObjectDoesNotExist:
            return Response("Комментарий не найден", status=status.HTTP_404_NOT_FOUND)
        serializer = self.serializers_class(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)
