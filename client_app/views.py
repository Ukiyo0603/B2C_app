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

# @api_view(['GET', 'POST'])
# class CheckOut(View):
#     def post(self, request):
        
        

#         #api k link daln hau get wale  
#         customer = request.session.get('customer')
#         phone = request.POST.get('phone')
#         address = request.POST.get('address')

#         #ism terko serializer banan padenge models k objects ko store kar then uska serializer daal define kar then get for same

#         data = Cart.objects.all()
#         serializer = CartSerializer(data, context={'request': request}, many=True)

#         cart = request.session.get('cart')
#         products = Product.get_products_by_id(list(cart.keys()))
#         print(address, phone, customer, cart, products)

#         for product in products:
#             print(cart.get(str(product.id)))
#             #order ka model banan k baad idhar daal d

#             order = Order(customer=Customer(id=customer),
#                           product=product,
#                           price=product.price,
#                           address=address,
#                           phone=phone,
#                           quantity=cart.get(str(product.id)))
#             order.save()
#         request.session['cart'] = {}

#         return redirect('cart')
    

#PAYMENT Stripe


# import stripe
# # This is your test secret API key.

# stripe.api_key = settings.STRIPE_SECRET_KEY
# def stripe_payment(request):
#     if request.method == "POST":
#         amount = int(request.POST['amount']) * 100
#         try:
#             checkout_session = stripe.checkout.Session.create(
#                         # Provide the exact Price ID (for example, pr_1234) of the product you want to sell   
#                 amount=amount,
#                 mode='payment',
#                 success_url=settings.SITE_URL + f'?success=true&session_id={CHECKOUT_SESSION_ID}',
#                 cancel_url=settings.SITE_URL + '?canceled=true&session_id={CHECKOUT_SESSION_ID}',
#             )

#             return redirect(checkout_session.url)
#         except:
#             return Response(
#                 {'error': 'Something went wrong while creating the stripe checkout session'},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )


from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import paypalrestsdk
from .serializers import PaymentSerializer

paypalrestsdk.configure({
    "mode": "sandbox", # replace with "live" for production
    "client_id": settings.PAYPAL_CLIENT_ID,
    "client_secret": settings.PAYPAL_CLIENT_SECRET
})

class PaymentAPIView(APIView):
    def post(self, request, format=None):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            try:
                payment = paypalrestsdk.Payment({
                    "intent": "sale",
                    "payer": {
                        "payment_method": "paypal"
                    },
                    "transactions": [{
                        "amount": {
                            "total": str(serializer.validated_data['amount']),
                            "currency": serializer.validated_data['currency']
                        },
                        "description": serializer.validated_data['description']
                    }],
                    "redirect_urls": {
                        "return_url": "http://localhost:8000/success/",
                        "cancel_url": "http://localhost:8000/cancel/"
                    }
                })
                if payment.create():
                    return Response(payment.links, status=status.HTTP_201_CREATED)
                else:
                    return Response(payment.error, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ExecutePaymentAPIView(APIView):
    def get(self, request, format=None):
        payment = paypalrestsdk.Payment.find(request.GET['paymentId'])
        if payment.execute({'payer_id': request.GET['PayerID']}):
            return Response({'message': 'Payment executed successfully.'}, status=status.HTTP_200_OK)
        else:
            return Response(payment.error, status=status.HTTP_400_BAD_REQUEST)
