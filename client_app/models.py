from django.db import models
from django.db.models import Model
import datetime

class Category(models.Model):

    allowed= models.BooleanField(default=False)
    category= models.CharField(max_length=50, default="fruits")
    color= models.CharField(max_length=10, default='', blank=True, null= True)


    @staticmethod
    def get_all_categories():
        return Category.objects.all()
    
    def __str__(self):
        return self.name
    

class SubCategory(models.Model):
    subcategory= models.CharField(max_length=50)
    category= models.ForeignKey(Category,on_delete=models.CASCADE,default=1 )

    allowed= models.BooleanField(default=False)
    color= models.CharField(max_length=10, default='', blank=True, null= True)
    
    @staticmethod
    def get_all_subcategories():
        return Category.objects.all()
    
    def __str__(self):
        return self.name


class DelivPart(models.Model):
 
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    agentimage= models.ImageField(upload_to='uploads/delivpar/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    state = models.CharField(max_length=50, default='', blank=True, null= True)
    address= models.CharField(max_length=250, default='', blank=True, null= True)
   


    #to save the data
    def register(self):
        self.save()

class Invman(models.Model):
 
    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    agentimage= models.ImageField(upload_to='uploads/invman/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    state = models.CharField(max_length=50, default='', blank=True, null= True)
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    

    #to save the data
    def register(self):
        self.save()

    
# class Brand(models.Model):
#     bname=models.CharField(max_length=50, default="Nike")
#     vendors= models.ForeignKey(Vendor,on_delete=models.CASCADE,default=1 )



class Customer(models.Model):

    firstname = models.CharField(max_length=50,default='Kartik')
    lastname = models.CharField (max_length=50,default='Singhania')
    contact = models.CharField(max_length=10)
    agentimage= models.ImageField(upload_to='uploads/customers/',null=True)
    email=models.EmailField(max_length=50,default='karsingh@gmail.com')
    city = models.CharField(max_length=50,default='Koregaon')
    address= models.CharField(max_length=250, default='', blank=True, null= True)
    pin = models.CharField(max_length=10,default='000000')
    password = models.CharField(max_length=100,default='password')

    #to save the data
    def register(self):
        self.save()


    @staticmethod
    def get_customer_by_email(email):
        try:
            return Customer.objects.get(email= email)
        except:
            return False


    def isExists(self):
        if Customer.objects.filter(email = self.email):
            return True

        return False
    
    
class Products(models.Model):

    productname = models.CharField(max_length=60,default="coldr")
    productprice= models.IntegerField(default=300)
    category= models.ForeignKey(Category,on_delete=models.CASCADE,default=1 )
    description= models.CharField(max_length=250, default='', blank=True, null= True)
    subcategory= models.CharField(max_length=50,default="milk")
    brand=models.CharField(max_length=50,default="PARLEG")
    uom=models.CharField(max_length=50,default="abc")
    offer=models.CharField(max_length=10,default='20%')
    quantity= models.IntegerField(default=10)
    image= models.ImageField(upload_to='uploads/products/')

    @staticmethod
    def get_products_by_id(ids):
        return Products.objects.filter (id__in=ids)
    @staticmethod
    def get_all_products():
        return Products.objects.all()

    @staticmethod
    def get_all_products_by_categoryid(category_id):
        if category_id:
            return Products.objects.filter (category=category_id)
        else:
            return Products.get_all_products()


# Create your models here.

class Order(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer,
                                 on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    price = models.IntegerField()
    address = models.CharField (max_length=50, default='', blank=True)
    phone = models.CharField (max_length=50, default='', blank=True)
    date = models.DateField (default=datetime.datetime.today)
    status = models.BooleanField (default=False)

    def placeOrder(self):
        self.save()

    @staticmethod
    def get_orders_by_customer(customer_id):
        return Order.objects.filter(customer=customer_id).order_by('-date')

class OrderItem(models.Model):
    product = models.ForeignKey(Products, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=150, blank=True, null=True) 
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=150, blank=True, null=True) 
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

# class ShippingAddress(models.Model):
#     order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
#     address = models.CharField(max_length=200, null=True, blank=True)
#     city = models.CharField(max_length=200, null=True, blank=True)
#     postalCode = models.CharField(max_length=200, null=True, blank=True)
#     country = models.CharField(max_length=200, null=True, blank=True)
#     shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
#     _id = models.AutoField(primary_key=True, editable=False)

#     def __str__(self):
#         return str(self.name)
    


