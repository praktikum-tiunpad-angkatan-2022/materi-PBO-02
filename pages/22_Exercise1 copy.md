---
layout: center
---

# Assignment 2 Soal 1 <kbd>soal1/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program counter untuk dua instance, A dan B dengan nilai counter awal keduanya adalah 0.

Prinsip program ini sederhana, yakni menambahkan +n jika diinputkan dengan format `<instance>+<n>`.
Secara default program akan menambahkan +1 jika n tidak diberikan.

Jumlah maksimum counter kedua instance adalah 6. Program akan exit jika ada salah satu counter instance mencapai > 6.

</div>

<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col'>

prompt : string (format `A+` atau `B+` atau `A+n` atau `B+n` dengan n adalah bilangan bulat positif)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col'>

`Nilai counter A : Nilai counter B` setiap selesai input.

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-2 flex flex-col mb-2'>
Sampel Input
```bash
A+
B+2
...
```
Sampel Output
```bash
0 : 0
1 : 0
1 : 2
...
```

</div>
</div>

</div>