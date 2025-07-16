numbers = [1,2,3,4,5,6,7,8,9,10]

even_numbers = [n for n in numbers if n % 2 == 0]

print(numbers)
print(even_numbers)

def __init__(self, name, velocity, orientation, altitude, fuel ):
        self.name = name
        self.velocity = velocity
        self.orientation = orientation
        self.altitude = altitude
        self.fuel = fuel

def __str__(self):
    return f"\n{self.name} | Altitude: {self.altitude:.2f} km | Velocity: {self.velocity:.2f} km/s | Orientation: {self.orientation:.1f}° | Fuel: {self.fuel:.1f}"
    