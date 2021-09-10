#!/usr/bin/env python3

import sys

def fast_pow(a, b):

    if b == 1:
        return a

    if b % 2 == 0:
        return fast_pow(a*a, b//2)
    else:
        return a * fast_pow(a, b - 1)

def fast_pow_mod(a, b, n):

    if b == 1:
        return a % n

    if b % 2 == 0:
        return fast_pow_mod(a*a, b//2, n) % n
    else:
        return a * fast_pow_mod(a, b - 1, n) % n

def get_rsa(p, q):
    n = p * q
    e = 3
    phi = (p - 1) * (q - 1)
    d = fast_pow_mod(e, phi, n)

    return (n, e, d)

print(f"n, e, d = {get_rsa(53, 59)}")
