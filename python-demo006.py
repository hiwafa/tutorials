import sys
print(sys.version)

if 4 > 2:
  print('How are you');
  
x = 5
y = "Hello, World!"

print(x, y)

#This is a comment.

"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")


print(type(x))

x, z, y = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)

x = y = z = "Orange"
print(x)
print(y)
print(z)


fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)


x = "Hi dear!!!";

def display():
  print(x)
  
display();


x = "awesome!"

def myFunc():
  x = "fantastic"
  print("Pthon is", x)
myFunc();


print("Python is "+x);



def globalVar():
  global x_y;
  x_y = "value1";

globalVar()

print("xy:", x_y);