# 11.13.21

## COUNTING SHEEP

def count_sheeps(sheep):
    counter = 0
    for s in sheep:
        if s:
            counter += 1
    return counter

# top answer:
# def count_sheeps(arrayOfSheeps):
#   return arrayOfSheeps.count(True)

## EVEN OR ODD
# 
# def even_or_odd(n):
#     if n % 2 == 0:
#         return 'Even'
#     else:
#         return 'Odd'
    
# ternary:
def even_or_odd(n):
    return('Even' if n % 2 == 0 else 'Odd')