---
layout: center
---

# Exercise <kbd><span class='text-teal'>Main.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat sebuah program untuk mencetak selisih terdekat dari tiga angka. Sebuah angka diinstansiasi pada sebuah objek.

Angka pertama dalam argumen method akan selalu menunjuk angka terkecil. Angka kedua dalam argumen method akan selalu menunjuk angka terbesar, namun bisa tidak dituliskan. Jika tidak dituliskan, angka terbesar akan selalu bernilai `100`.

Kembalikan selisih terkecil dari angka tengah dengan angka terkecil dan/ atau angka terbesar.

</div>

<div class='grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col'>

- a : int (angka tengah)
- lo : int (angka terkecil)
- hi : int (optional - angka terbesar, default `100`)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col'>

int (selisih terkecil antara angka tengah dengan angka terkecil atau angka terbesar)

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-2 flex flex-col mb-2'>
Sampel Input & Output 1
```bash
26
15
```
```bash
11
```
Sampel Input & Output 2
```bash
62
31 88
```
```bash
26
```

</div>
</div>

</div>