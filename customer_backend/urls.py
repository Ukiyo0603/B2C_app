"""
URL configuration for customer_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include,re_path
from django.urls import path
from client_app.views import PaymentAPIView, ExecutePaymentAPIView
from client_app import views
from django.views.generic.base import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index,name="custom"),
    path('payments/', PaymentAPIView.as_view(), name='payment'),
    path('execute-payment/', ExecutePaymentAPIView.as_view(), name='execute_payment'),
    path('uom',views.inx,name="cuom"),
    # path('payments/', views.PaymentAPIView.as_view(), name='payment'),
    # path('payment/', views.stripe_payment),
    path('manifest.json', TemplateView.as_view(template_name='manifest.json', content_type='application/json'), name='manifest.json'),

    # re_path(r'^api/customer/$', views.custm_list),
    # re_path(r'^api/product/$', views.prod_list),
    # re_path(r'^api/category/$', views.categ_list),
    # re_path(r'^api/subcategory/$', views.subcateg_list),
    # re_path(r'^api/delivpar/$', views.deliv_list),
    # re_path(r'^api/invman/$', views.invm_list),
  
]
