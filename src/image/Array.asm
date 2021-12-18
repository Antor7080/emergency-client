org 100h
.data

index dw 0  
max db 0 
arr db 9 dup(0)
.code
main proc 
  mov cx,9
  mov si,0
  s1: 
  mov ah,1
  int 21h
  sub al,48
  mov arr[si],al
  add si,1
  loop s1
  
  mov ah,2
  mov dl,9
  int 21h
  mov cx,9
  s2:  
  mov ah,2
  mov bl,max 
  mov si,index 
  cmp bl,arr[si]
  jnl s3
  mov bl,arr[si]
  mov max,bl
 
  s3:
  
  add index,1
  loop s2
  mov ah,2
  mov dl,max
  add dl,48
  int 21h
  ret