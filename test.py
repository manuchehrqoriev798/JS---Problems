import os

for i in range(1, 16):
    filename = f'task{i}.js'
    with open(filename, 'w') as file:
        file.write('')
    print(f'Created: {filename}')
