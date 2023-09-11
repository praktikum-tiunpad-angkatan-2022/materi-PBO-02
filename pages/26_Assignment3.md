---
layout: center
---

# Assignment 2 Soal 3 <kbd>soal3/<span class='text-teal'>Test.java</span></kbd>

<br>

<div class='grid grid-cols-2 gap-x-3'>

<div>

Buat class “Rekening” yang mempunyai default balance = 0 dan 2 (dua) public method (selain constructor)

- getBalance() : _float_
- addBalance() : _void_

Class lain tidak boleh mengakses member yang lain kecuali constructor dan 2 method diatas.

Program berjalan dan menerima input terus menerus (_looping_) sampai user keluar dari program.


</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] gap-x-3 items-center text-sm'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
<span><span class='italic'>op</span> : int (1 = get, 2 = add, 0 = exit)</span>
<span><span class='italic'>addValue</span> : int (hanya jika op = 2)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2'>
<span>Jika op = 1 ATAU op = 2 -> Jumlah balance saat ini.</span>
<span>Jika op = 0 -> Keluar dari program.</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2'>
Sampel Input
```bash
2
2500
```
Sampel Output
```bash
2500
```

</div>
</div>

</div>