---
clicks: 3
---

# Overloading (constructor)

Overloading sebuah constructor berarti membuat banyak <br>konstruktor yang memiliki parameter yang berbeda-beda

<div class='grid grid-cols-2 mt-4'>

```java {all|5-8|10-13|15-18}
public Manusia {
    private String nama;
    private int umur;

    public Manusia() {
        nama = null;
        umur = 0;
    }

    public Manusia(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }

     public Manusia(int umur, String nama) {
        this.umur = umur;
        this.nama = nama;
    }
}
```

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-28'>

<carbon-arrow-left class='inline'/> Constructor default (tanpa parameter)

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>String</kbd>,<kbd>int</kbd>

</div>

<div v-click="3" class='text-sm mt-16'>

<carbon-arrow-left class='inline'/> Constructor dengan paramater <kbd>int</kbd>,<kbd>String</kbd>

</div>
</div>
</div>
