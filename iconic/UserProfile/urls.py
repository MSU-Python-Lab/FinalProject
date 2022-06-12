from django.urls import include, path

from . import views

urlpatterns = [
    path('wallet/', views.UserWalletView.as_view(),
         name='amount-wallet')
]
