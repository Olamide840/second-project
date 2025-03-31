def caesar_cipher(text, shift, mode="encrypt"):
    result = ""
    
    if mode == "decrypt":
        shift = -shift  # Reverse shift for decryption
    
    for char in text:
        if char.isalpha():
            shift_base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - shift_base + shift) % 26 + shift_base)
        else:
            result += char  # Keep spaces and special characters unchanged
    
    return result

# User Input
choice = input("Do you want to (E)ncrypt or (D)ecrypt? ").strip().lower()
message = input("Enter your message: ")
shift_value = int(input("Enter shift value: "))

# Encrypt or Decrypt
if choice == 'e':
    print("Encrypted Message:", caesar_cipher(message, shift_value, "encrypt"))
elif choice == 'd':
    print("Decrypted Message:", caesar_cipher(message, shift_value, "decrypt"))
else:
    print("Invalid choice. Please enter 'E' for encryption or 'D' for decryption.")
