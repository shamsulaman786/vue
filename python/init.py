class Person():
	"""docstring for Person"""
	def __init__(self, name, age):
		self.name = name
		self.age = age
		
p1 = Person("shams",23);

print p1.name
print p1.age

del p1.age;


print p1.name
# print p1.age

del p1;


# print p1.name
# print p1.age