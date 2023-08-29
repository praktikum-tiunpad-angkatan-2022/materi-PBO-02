---
clicks: 2
---

# Overloading (method)

<br>
Overloading method sama halnya dengan overloading constructor karena constructor merupakan (special) method.

<div class='grid grid-cols-2 mt-4'>

```java {all|2-5|6-8}

public void setUmur(int umur) {
this.umur = umur;
}

public void setUmur(String umur) {
this.umur = Integer.parseInt(umur);
}

```

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>int</kbd>

</div>
<div v-click="2" class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Method setter dengan parameter <kbd>String</kbd>

</div>
</div>
</div>
