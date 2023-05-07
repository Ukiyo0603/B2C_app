from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from client_app.models import *
from django.conf import settings
from rest_framework.views import APIView
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')

@api_view(['GET'])
def getProducts(request):
    return Response(products)

def index(request):
    return render(request,'index.html')

def inx(request):
    return render(request,'base.html')


 

from django.contrib.auth.hashers import check_password

from django.views import View

@api_view(['GET', 'POST'])
class CheckOut(View):
    def post(self, request):
        
        

        #api k link daln hau get wale  
        customer = request.session.get('customer')
        phone = request.POST.get('phone')
        address = request.POST.get('address')

        #ism terko serializer banan padenge models k objects ko store kar then uska serializer daal define kar then get for same

        data = Cart.objects.all()
        serializer = CartSerializer(data, context={'request': request}, many=True)

        cart = request.session.get('cart')
        products = Product.get_products_by_id(list(cart.keys()))
        print(address, phone, customer, cart, products)

        for product in products:
            print(cart.get(str(product.id)))
            #order ka model banan k baad idhar daal d

            order = Order(customer=Customer(id=customer),
                          product=product,
                          price=product.price,
                          address=address,
                          phone=phone,
                          quantity=cart.get(str(product.id)))
            order.save()
        request.session['cart'] = {}

        return redirect('cart')
    

#PAYMENT Stripe


import stripe
# This is your test secret API key.
stripe.api_key = settings.STRIPE_SECRET_KEY

class StripeCheckoutView(APIView):
    def post(self, request):
        if request.method == "POST":
            try:
                checkout_session = stripe.checkout.Session.create(
                    line_items=[
                        {
                            # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                            'price': '{{PRICE_ID}}',
                            'quantity': 1,
                        },
                    ],
                    mode='payment',
                    success_url=settings.SITE_URL + f'?success=true&session_id={CHECKOUT_SESSION_ID}',
                    cancel_url=settings.SITE_URL + '?canceled=true&session_id={CHECKOUT_SESSION_ID}',
                )

                return redirect(checkout_session.url)
            except:
                return Response(
                    {'error': 'Something went wrong while creating the stripe checkout session'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
            

