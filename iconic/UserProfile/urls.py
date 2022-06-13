from django.urls import include, path

from . import views

urlpatterns = [
    path('wallet/', views.UserWalletView.as_view(),
         name='amount-wallet'),
    path('resume/', views.UserResumeGetView.as_view()),
    path('resume/edit/', views.UserResumeEditView.as_view()),

]
