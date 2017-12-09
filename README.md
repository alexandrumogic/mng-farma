# Managementul unei farmacii

Managementul unei farmacii este  o aplicatie web care permite utilizatorilor sa caute medicamente intr-o baza de date si sa li se afiseze dupa gasire pretul si caracteristicile medicamentului (ce tip de medicament este si cum se administreaza). Clientii pot sa plateasca on-line medicamentele si sa mearga cu un id sau cod generat sa ridice medicamentele.

Farmacisti vor sti ce medicamente au in stoc (cantitate). Ei pot face oferte (reduceri de preturi intr-o anumita perioada) sau sa creasca pretul medicamentelor. Acestia vor fi avertizati cand au in stoc medicamente mai putine de o anumita cantitate. Ei pot sa creeze rapoarte pe cate medicamente a vandut /zi/saptamana/luna/an. 

Aplicatia permite crearea de facturi pentru clienti cu cate medicamente au cumparat, in ce data si ora si la ce farmacist.

# Tehnologii folosite

Aplicatia a fost proiectata utilizand Angular CLI (https://github.com/angular/angular-cli). 

Pentru baza de date sa folosit Firebase, iar pentru partea client s-a folosit framework-ul Angular. 

# Rulare

Pentru rulare este necesar sa aveti instalat pe sistemul de operare NodeJS si Angular CLI.

Se vor respecta urmatorii pasi:
- git clone https://github.com/alexandrumogic/mng-farma.git
- npm install
- ng serve
