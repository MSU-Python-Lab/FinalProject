from django.urls import include, path

from . import views

urlpatterns = [
    path('wallet/', views.WalletView.as_view()),

    path('resume/', views.UserResumeGetView.as_view()),
    path('resume/edit/', views.UserResumeEditView.as_view()),
  
    path('followers/count/', views.NumberOfFollowersView.as_view()),
    path('follower/', views.FollowersGetAddDeleteView.as_view()),

    path('professions/', views.ProfessionsGetView.as_view()),
    path('professions/edit/', views.ProfessionsEditView.as_view()),

    path('cities/', views.CitiesGetView.as_view()),
    path('cities/edit/', views.CitiesEditView.as_view()),
  
    path('likes/', views.LikesGetDeleteView.as_view()),

    path('post/edit/', views.PostEditView.as_view()),
    path('post/', views.PostGetView.as_view()),
    path('post/all/', views.GetAllUserPostsView.as_view()),
  
    path('comments/', views.CommentGetView.as_view()),
    path('comments/all/', views.CommentsGetView.as_view()),
    path('comments/edit/', views.CommentEditView.as_view()),
]
