from django.urls import path, include,re_path
from client_app import views

urlpatterns = [
    path('', views.getRoutes, name="getRoutes"),
    path('product/', views.getProducts, name="getProducts"),

    # path('', views.getProduct, name='homepage'),
    # path('store', store , name='store'),

    # path('signup', Signup.as_view(), name='signup'),
    # path('login', Login.as_view(), name='login'),
    # path('logout', logout , name='logout'),
    # path('cart', auth_middleware(Cart.as_view()) , name='cart'),
    # path('check-out', CheckOut.as_view() , name='checkout'),
    # path('orders', auth_middleware(OrderView.as_view()), name='orders'),

    # re_path(r'adminlog/', views.CheckOut),
    
    re_path(r'adminlog/', views.Products),
]