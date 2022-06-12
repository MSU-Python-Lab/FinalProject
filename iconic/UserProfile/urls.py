from django.urls import include, path

from . import views

urlpatterns = [
    path('user/wallet/', views.UserWalletView.as_view(),
         name='amount-wallet')
]
