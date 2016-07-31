# test_AutoScroll
Implement autoscrolling to existing code example based on React.js

# source 

Сейчас компонент App рисует в ограниченный по размеру элемент множество элементов списка. Эти элементы списка со временем заполняют внешний контейнер полностью, и внешний контейнер скрывает их. Для того, чтобы читать дальше, нужно самостоятельно скролить.
Нужно исправить код компонента AutoScroll, который сейчас просто оборачивает ограниченный по высоте список, так, чтобы нам не нужно было скроллить самостоятельно: при добавлении в lines новых строк скролл должен автоматически смещаться в самый низ, чтобы новую добавленную строку было видно.
Так же может быть ситуация, что я хочу прочитать что-то из середины этого импровизированного чата. При этом меня не должно постоянно перекидывать на его конец, то есть автоскролл работать не должен. Для этого компонент принимает обязательное свойство buffer, которое говорит о том, сколько пикселов снизу нужно отскролить вверх, чтобы автоскролл перестал работать. 

https://codepen.io/TimR/pen/zBpWXd/