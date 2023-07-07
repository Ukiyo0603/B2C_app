from django.urls import include, path
from rest_framework_nested.routers import DefaultRouter, NestedDefaultRouter
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'cart', views.CartViewSet)
router.register(r'delivery-cost', views.DeliveryCostViewSet)
router.register(r'user', views.UserViewSet)

cart_router = routers.NestedDefaultRouter(router, "carts", lookup="cart")
cart_router.register("items", views.CartItemViewSet, basename="cart-items")


urlpatterns = [
    path('', include((router.urls, 'B2C_APP.cart'))),
    path("", include(router.urls)),
    path("", include(cart_router.urls)),
]