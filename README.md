# MeikkuLog

Mobiilikäyttöön suunniteltu työvuorojen ja päivystyksen kliinisten tapahtumien kirjaussovellus. Koko sovellus on yhdessä `index.html`-tiedostossa, ja kaikki tiedot tallennetaan **vain selaimen omaan muistiin** (localStorage) — mitään ei lähetetä verkkoon.

🔗 **Sovellus:** https://danielturunen.github.io/MeikkuLog/

---

## Ominaisuudet

### Työvuorot
- Vuorotyypit aamu-, väli-, ilta- ja yövuoroille (A, D, I, Y, d, J, Ö, C, R, W), automaattiset kellonajat ja viikonloppupoikkeukset.
- Vuoron voi jakaa osioihin ja merkitä sijoituksen/roolin (esim. H2, H3, RH, AMBreboa) erikoisrooleineen (vastaava, RH-ruuhka, ane, ane2/knk, TRAU, elv).
- Kuukausinäkymä, tuntilaskenta ja tuonti/varmuuskopiointi.

### Tilastot
- Vuoromäärät ja tunnit, keskimääräinen vuoro, yövuorot, viikonloput, pisin työputki.
- **Aamu / väli / ilta / yö** -jaottelu.
- Vuorotyypit, sijoitukset ja tarkat sijoituskoodit palkkeina.

### Hätätilapotilaat
- Kirjaus vuoron aikana tai erillisestä päiväkirjasta: **Traumahälytys, Raptor vakaa, Raptor instabiili, Elvytys, Muu hätätila**.
- Traumahälytyksille: tylppä/terävä, ikä, vammamekanismi, vammat/löydökset, rooli (Traumahoitaja / Ane1 / Ane2 / AMBreboa), jäikö henkiin sekä jatkohoito (päivystys, leikkaussali, teho-/vuodeosasto, kraniotomia, laparotomia ym.).
- Tilastot **jaksonvalinnalla** (kuukausittain ↔ koko historia): tyypeittäin, viikonpäivittäin, kuukausisyklit, tylppä vs. terävä, eloonjäänti-%, jatkohoitojakauma sekä **traumahälytykset vs. traumatiimivuorot** ja tiimivuorot rooleittain.
- **Traumatiimi & altistus** -mittarit: tiimivuorot ja -tunnit, osuus työajasta traumatiimissä, traumahälytyksiä per tiimivuoro, hälytyksiä per 100 h sekä osuus tiimivuoroista joissa vähintään yksi hälytys.

### Toimenpiteet & hälytykset
- Huonekohtainen kirjaus: intubaatio, STROKE, elvytys, STEMI, massiivivuoto, sepsis, kardioversio, CVK, arteriakanyyli, IO ja muu.
- **STROKE-hälytyksille** hoitopäätös/löydös: liuotushoito, trombektomia (EVT), ei liuotushoitoa/trombektomiaa, seuranta, vuoto, ei löydöksiä, vanha infarkti.
- **UÄ-perifeerinen suonikanylointi** omalla lopputuloksella (tarvitsi UÄ / onnistui ilman UÄ / ei onnistunut) ja onnistumis-%:lla — myös huoneittain.
- Paikat: H1, H2, H3, H4, H5, H6, H19, Raptor-sali, T-Aula, S-Aula, RTG, Muu.
- Tilastot jaksonvalinnalla: tyypeittäin, kuukausittain, viikonpäivittäin, huoneittain, toimenpiteitä per työvuoro sekä UÄ-kanylointien onnistumis-% ja STROKE-hoitopäätökset.

---

## Asennus iPhoneen (kotinäytön sovellukseksi)

1. Avaa sovelluslinkki **Safarissa**.
2. Paina **Jaa**-kuvaketta → **Lisää Koti-valikkoon**.
3. Sovellus avautuu koko ruudun tilassa kuin natiivisovellus.

Toimii myös Androidilla (Chrome → *Lisää aloitusnäyttöön*) ja työpöydällä.

---

## Tietojen tallennus ja varmuuskopiointi

- Kaikki tiedot ovat **laitekohtaisia** ja säilyvät vain kyseisen selaimen localStoragessa (avaimet `tv_shifts2`, `tv_traumas`, `tv_procs`). Tiedot eivät synkronoidu laitteiden välillä.
- **Varmuuskopio:** ⤓-painike tallentaa kaiken yhteen JSON-tiedostoon.
- **Palautus:** ⤒-painike lukee varmuuskopion tai rivimuotoiset vuorokoodit takaisin.
- Ota varmuuskopio ajoittain, erityisesti ennen selaimen tyhjennystä tai laitteen vaihtoa.

## Yksityisyys

Sovellus ei sisällä eikä lähetä potilastietoja. Kaikki kirjaukset tehdään ja säilytetään paikallisesti käyttäjän omassa laitteessa. Tämä lähdekoodi ei sisällä potilasdataa.

## Tekniikka

- Yksi staattinen `index.html` — ei riippuvuuksia, ei build-vaihetta, ei palvelinta.
- Toimii offline-tilassa kotinäytöltä avattuna.
- Julkaistu GitHub Pagesilla.

## Kehitys

Avaa `index.html` selaimessa. Muutokset tehdään suoraan tiedostoon; uudelleenlataus riittää.
