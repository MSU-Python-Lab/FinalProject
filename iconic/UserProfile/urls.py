from django.urls import include, path

from . import views

urlpatterns = [
    path('wallet/', views.UserWalletView.as_view(),
         name='amount-wallet'),
    path('resume/', views.UserResumeGetView.as_view()),
    path('resume/edit/', views.UserResumeEditView.as_view()),
  
    path('followerscount/', views.NumberOfFollowersView.as_view()),
    path('follower/', views.FollowersGetAddDeleteView.as_view()),

    path('professions/', views.ProfessionsGet.as_view()),
    path('professions/edit/', views.ProfessionsEdit.as_view()),

    path('cities/', views.CitiesGet.as_view()),
    path('cities/edit/', views.CitiesEdit.as_view()),
  
    path('likes/', views.LikesGetDeleteView.as_view()),

    path('post/edit/', views.PostEditView.as_view()),
    path('post/', views.PostGetView.as_view()),
    path('post/all/', views.AllUserPostsGetView.as_view()),
  
    path('comments/', views.CommentGet.as_view()),
    path('comments/all/', views.CommentsGet.as_view()),
    path('comments/edit/', views.CommentEdit.as_view()),
]
