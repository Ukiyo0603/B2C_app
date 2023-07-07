from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import User, Cart, DeliveryCost, Cartitems
from .serializers import UserSerializer, CartSerializer, DeliveryCostSerializer, AddCartItemSerializer, CartItemSerializer
from .helpers import CartHelper
from rest_framework.mixins import CreateModelMixin, RetrieveModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer


# class CartViewSet(viewsets.ModelViewSet):
#     queryset = Cart.objects.all().order_by('id')
#     serializer_class = CartSerializer

#     @action(methods=['get'], detail=False, url_path='checkout/(?P<userId>[^/.]+)', url_name='checkout')
#     def checkout(self, request, *args, **kwargs):

#         try:
#             user = User.objects.get(pk=int(kwargs.get('userId')))
#         except Exception as e:
#             return Response(status=status.HTTP_404_NOT_FOUND,
#                             data={'Error': str(e)})

#         cart_helper = CartHelper(user)
#         checkout_details = cart_helper.prepare_cart_for_checkout()

#         if not checkout_details:
#             return Response(status=status.HTTP_404_NOT_FOUND,
#                             data={'error': 'Cart of user is empty.'})

#         return Response(status=status.HTTP_200_OK, data={'checkout_details': checkout_details})
    

class DeliveryCostViewSet(viewsets.ModelViewSet):
    queryset = DeliveryCost.objects.all().order_by('id')
    serializer_class = DeliveryCostSerializer

class CartViewSet(CreateModelMixin,RetrieveModelMixin, DestroyModelMixin, GenericViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemViewSet(ModelViewSet):
    
    def get_queryset(self):
        return Cartitems.objects.filter(cart_id=self.kwargs["cart_pk"])
    
    
    def get_serializer_class(self):
        if self.request.method == "POST":
            return AddCartItemSerializer
        
        return CartItemSerializer
    
    def get_serializer_context(self):
        return {"cart_id": self.kwargs["cart_pk"]}

