from django.urls import path, include
from client_app import views
from .views import StripeCheckoutView

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('product/', views.getProducts, name="getProducts"),
    path('payment/', StripeCheckoutView.as_view()),
]