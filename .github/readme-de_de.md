> [!IMPORTANT]  
> Die hier veröffentlichten Informationen sind möglicherweise veraltet oder unvollständig. Für aktuelle Informationen nutzen Sie bitte die englische Version.
> Letztes Update dieser README: 28.9.2024

<a name="readme-top"></a>

![][cover]

<div align="center">

[English](readme.md) | German | [中文](readme-zh_cn.md) | [日本語](readme-ja_jp.md) | [Русский](readme-ru_ru.md)

[![GitHub Stars](https://img.shields.io/github/stars/SillyTavern/SillyTavern.svg)](https://github.com/SillyTavern/SillyTavern/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/SillyTavern/SillyTavern.svg)](https://github.com/SillyTavern/SillyTavern/network)
[![GitHub Issues](https://img.shields.io/github/issues/SillyTavern/SillyTavern.svg)](https://github.com/SillyTavern/SillyTavern/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SillyTavern/SillyTavern.svg)](https://github.com/SillyTavern/SillyTavern/pulls)

</div>

---

SillyTavern bietet eine einheitliche Benutzeroberfläche für viele LLM-APIs (KoboldAI/CPP, Horde, NovelAI, Ooba, Tabby, OpenAI, OpenRouter, Claude, Mistral und mehr), ein mobilfreundliches Layout, einen Visual-Novel-Modus, die Integration von Automatic1111 & ComfyUI API zur Bilderzeugung, TTS, WorldInfo (Lorebooks), anpassbare UI, automatische Übersetzung, mehr Eingabeaufforderungsoptionen, als du jemals wolltest oder brauchst, und unendliches Wachstumspotenzial durch Drittanbietererweiterungen.

Wir haben eine [Dokumentationswebsite](https://docs.sillytavern.app/), um die meisten deiner Fragen zu beantworten und dir den Einstieg zu erleichtern.

## Was ist SillyTavern?

SillyTavern (oder ST für kurz) ist eine lokal installierte Benutzeroberfläche, die es dir ermöglicht, mit Textgenerations-LLMs, Bildgenerierungsmaschinen und TTS-Sprachmodellen zu interagieren.

Angefangen im Februar 2023 als Fork von TavernAI 1.2.8 hat SillyTavern nun über 100 Mitwirkende und 2 Jahre unabhängiger Entwicklung hinter sich und dient weiterhin als führende Software für versierte KI-Hobbyisten.

## Unsere Vision

1. Wir möchten die Nutzer mit so viel Nutzen und Kontrolle über ihre LLM-Eingabeaufforderungen wie möglich ausstatten. Die steile Lernkurve ist Teil des Spaßes!
2. Wir bieten keine Online- oder gehosteten Dienste an, noch verfolgen wir programmgesteuert Benutzerdaten.
3. SillyTavern ist ein Herzensprojekt, das von einer engagierten Community von LLM-Enthusiasten unterstützt wird, und wird immer kostenlos und Open Source sein.

## Zweige

SillyTavern wird mit einem Zweigsystem entwickelt, um ein reibungsloses Erlebnis für alle Nutzer zu gewährleisten.

* `release` -🌟 **Empfohlen für die meisten Nutzer.** Dies ist der stabilste und empfohlene Zweig, der nur aktualisiert wird, wenn wichtige Versionen veröffentlicht werden. Er ist für die Mehrheit der Nutzer geeignet. Typischerweise einmal im Monat aktualisiert.
* `staging` - ⚠️ **Nicht für den gelegentlichen Gebrauch empfohlen.** Dieser Zweig enthält die neuesten Funktionen, kann jedoch jederzeit instabil sein. Nur für Power-User und Enthusiasten. Mehrmals täglich aktualisiert.

Wenn du nicht vertraut mit der Verwendung der git CLI bist oder nicht verstehst, was ein Zweig ist, mach dir keine Sorgen! Der Release-Zweig ist immer die bevorzugte Option für dich.

## Was brauche ich zusätzlich zu SillyTavern?

Da SillyTavern nur eine Benutzeroberfläche ist, benötigst du Zugriff auf ein LLM-Backend, um Inferenz bereitzustellen. Du kannst AI Horde für sofortiges Chatten ohne weitere Einrichtung verwenden. Darüber hinaus unterstützen wir viele andere lokale und cloudbasierte LLM-Backends: OpenAI-kompatible API, KoboldAI, Tabby und viele mehr. Du kannst mehr über unsere unterstützten APIs in [der FAQ](https://docs.sillytavern.app/usage/api-connections/) lesen.

### Brauche ich einen leistungsstarken PC, um SillyTavern auszuführen?

Die Hardwareanforderungen sind minimal: Es läuft auf allem, was NodeJS 18 oder höher ausführen kann. Wenn du LLM-Inferenz auf deinem lokalen Rechner durchführen möchtest, empfehlen wir eine NVIDIA-Grafikkarte der 3000er-Serie mit mindestens 6 GB VRAM. Überprüfe die Dokumentation deines Backends für weitere Einzelheiten.

### Vorgeschlagene Backends (nicht verbunden)

* [AI Horde](https://aihorde.net/) - verwende Modelle, die von Freiwilligen gehostet werden. Erfordert keine weitere Einrichtung
* [KoboldCpp](https://github.com/LostRuins/koboldcpp) - ein Favorit der Community, um GGUF-Modelle lokal auszuführen
* [tabbyAPI](https://github.com/theroyallab/tabbyAPI) - eine beliebte, leichtgewichtige, lokal gehostete exl2 Inferenz-API
* [OpenRouter](https://openrouter.ai) - eine einzige API für viele Cloud-Anbieter (OpenAI, Claude, Meta Llama usw.) sowie beliebte Community-Modelle.

## Fragen oder Vorschläge?

### Discord-Server

| [![][discord-shield-badge]][discord-link] | [Tritt unserer Discord-Community bei!](https://discord.gg/sillytavern) Erhalte Unterstützung, teile deine Lieblingscharaktere und Eingabeaufforderungen. |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |

Oder nimm direkt Kontakt mit den Entwicklern auf:

* Discord: cohee, rossascends, wolfsblvt
* Reddit: [/u/RossAscends](https://www.reddit.com/user/RossAscends/), [/u/sillylossy](https://www.reddit.com/user/sillylossy/), [u/Wolfsblvt](https://www.reddit.com/user/Wolfsblvt/)
* [Erstelle ein GitHub-Problem](https://github.com/SillyTavern/SillyTavern/issues)

### Ich mag dein Projekt! Wie kann ich beitragen?

1. Sende Pull-Requests. Lerne, wie du beitragen kannst: [CONTRIBUTING.md](../CONTRIBUTING.md)
2. Sende Funktionser Vorschläge und Problemmeldungen unter Verwendung der bereitgestellten Vorlagen.
3. Lies diese gesamte README-Datei und überprüfe zuerst die Dokumentationswebsite, um doppelte Probleme zu vermeiden.

## Screenshots

<img width="500" alt="image" src="https://github.com/user-attachments/assets/9b5f32f0-c3b3-4102-b3f5-0e9213c0f50f">
<img width="500" alt="image" src="https://github.com/user-attachments/assets/913fdbaa-7d33-42f1-ae2c-89dca41c53d1">

## Charakterkarten

SillyTavern basiert auf dem Konzept der "Charakterkarten". Eine Charakterkarte ist eine Sammlung von Eingabeaufforderungen, die das Verhalten des LLM festlegen und erforderlich sind, um anhaltende Gespräche in SillyTavern zu führen. Sie funktionieren ähnlich wie ChatGPTs GPTs oder Poes Bots. Der Inhalt einer Charakterkarte kann alles sein: ein abstraktes Szenario, ein Assistent, der für eine bestimmte Aufgabe maßgeschneidert ist, eine berühmte Persönlichkeit oder ein fiktiver Charakter.

Das Namensfeld ist der einzige erforderliche Eingabewert für die Charakterkarte. Um ein neutrales Gespräch mit dem Sprachmodell zu beginnen, erstelle eine neue Karte, die einfach "Assistent" genannt wird, und lasse die restlichen Felder leer. Für einen thematischeren Chat kannst du dem Sprachmodell verschiedene Hintergrundinformationen, Verhaltensweisen und Schreibmuster sowie ein Szenario geben, um das Gespräch zu beginnen.

Um ein schnelles Gespräch zu führen, ohne eine Charakterkarte auszuwählen, oder um einfach die LLM-Verbindung zu testen, gib einfach deine Eingabeaufforderung in die Eingabezeile auf dem Willkommensbildschirm ein, nachdem du SillyTavern geöffnet hast. Bitte beachte, dass solche Chats vorübergehend sind und nicht gespeichert werden.

Um eine allgemeine Vorstellung davon zu bekommen, wie man Charakterkarten definiert, sieh dir die Standardfigur (Seraphina) an oder lade ausgewählte von der Community erstellte Karten im Menü "Erweiterungen & Assets herunterladen" herunter.

## Hauptmerkmale

* Erweiterte Texteinstellungen mit vielen von der Community erstellten Voreinstellungen
* Unterstützung für World Info: erstelle reichhaltige Lore oder speichere Tokens auf deiner Charakterkarte
* Gruppenchats: Multi-Bot-Räume für Charaktere, die mit dir und/oder untereinander sprechen
* Reichhaltige UI-Anpassungsoptionen: Themenfarben, Hintergrundbilder, benutzerdefiniertes CSS und mehr
* Benutzer-Personas: Lass die KI ein wenig über dich wissen, um die Immersion zu erhöhen
* Eingebaute RAG-Unterstützung: Füge Dokumente zu deinen Chats hinzu, auf die die KI verweisen kann
* Umfangreiches Chat-Befehlsunterstützungssystem und eigene [Scripting-Engine](https://docs.sillytavern.app/usage/st-script/)

## Erweiterungen

SillyTavern hat Unterstützung für Erweiterungen.

* Emotionale Ausdrucksformen von Charakteren (Sprites)
* Automatische Zusammenfassung des Chatverlaufs
* Automatische UI- und Chat-Übersetzung
* Bildgenerierung mit Stable Diffusion/FLUX/DALL-E
* Text-to-Speech für KI-Antwortnachrichten (über ElevenLabs, Silero oder die TTS-Funktion des Betriebssystems)
* Websuchfunktionen zum Hinzufügen zusätzlicher realer Kontexte zu deinen Eingabeaufforderungen
* Viele weitere sind im Menü "Erweiterungen & Assets herunterladen" verfügbar.

Tutorials zur Nutzung findest du in den [Docs](https://docs.sillytavern.app/).

# ⌛ Installation

> \[!WARNING]
>
> * INSTALLIERE NICHT IN EINEM VON WINDOWS GESTEUERTEN ORDNER (Programme, System32 usw.).
> * FÜHRE START.BAT NICHT MIT ADMIN-BERECHTIGUNGEN AUS.
> * DIE INSTALLATION AUF WINDOWS 7 IST UNMÖGLICH, DA ES NODEJS 18.16 NICHT AUSFÜHREN KANN.

## 🪟 Windows

### Installation über Git

1. Installiere [NodeJS](https://nodejs.org/en) (die neueste LTS-Version wird empfohlen).
2. Installiere [Git für Windows](https://gitforwindows.org/).
3. Öffne den Windows-Explorer (`Win+E`).
4. Durchsuche oder erstelle einen Ordner, der nicht von Windows kontrolliert oder überwacht wird. (z.B.: C:\MySpecialFolder\)
5. Öffne ein Eingabeaufforderungsfenster in diesem Ordner, indem du in die 'Adressleiste' oben klickst, `cmd` eingibst und Enter drückst.
6. Sobald das schwarze Fenster (Eingabeaufforderung) erscheint, gib EINE der folgenden Optionen ein und drücke Enter:

* für den Release-Zweig: `git clone https://github.com/SillyTavern/SillyTavern -b release`
* für den Staging-Zweig: `git clone https://github.com/SillyTavern/SillyTavern -b staging`

7. Sobald alles geklont ist, doppelklicke auf `Start.bat`, damit NodeJS seine Anforderungen installiert.
8. Der Server wird dann gestartet, und SillyTavern wird in deinem Browser geöffnet.

### Installation über GitHub Desktop

(Dies ermöglicht die Nutzung von git **nur** in GitHub Desktop. Wenn du `git` auch in der Eingabeaufforderung verwenden möchtest, musst du auch [Git für Windows](https://gitforwindows.org/) installieren.)

1. Installiere [NodeJS](https://nodejs.org/en) (die neueste LTS-Version wird empfohlen).
2. Installiere [GitHub Desktop](https://central.github.com/deployments/desktop/desktop/latest/win32).
3. Klicke nach der Installation von GitHub Desktop auf `Ein Repository aus dem Internet klonen....` (Hinweis: Du **musst kein** GitHub-Konto für diesen Schritt erstellen).
4. Klicke im Menü auf den Tab URL, gib diese URL ein `https://github.com/SillyTavern/SillyTavern` und klicke auf Klonen. Du kannst den lokalen Pfad ändern, um festzulegen, wo SillyTavern heruntergeladen werden soll.
5. Um SillyTavern zu öffnen, durchsuche mit dem Windows-Explorer den Ordner, in den du das Repository geklont hast. Standardmäßig wird das Repository hier geklont: `C:\Users\[Dein Windows-Benutzername]\Documents\GitHub\SillyTavern`.
6. Doppelklicke auf die Datei `start.bat`. (Hinweis: Der Teil `.bat` des Dateinamens könnte von deinem Betriebssystem verborgen sein. In diesem Fall sieht es aus wie eine Datei namens "`Start`". Dies ist die Datei, auf die du doppelklickst, um SillyTavern auszuführen.)
7. Nach dem Doppelklicken sollte ein großes schwarzes Konsolenfenster erscheinen, und SillyTavern beginnt, das zu installieren, was es zum Betrieb benötigt.
8. Nach dem Installationsprozess sollte das Konsolenfenster so aussehen, und ein SillyTavern-Tab sollte in deinem Browser geöffnet sein.
9. Verbinde dich mit einer der [unterstützten APIs](https://docs.sillytavern.app/usage/api-connections/) und beginne zu chatten!

## 🐧 Linux & 🍎 MacOS

Für MacOS / Linux werden all diese Schritte in einem Terminal durchgeführt.

1. Installiere git und nodeJS (die Methode zur Durchführung hängt von deinem Betriebssystem ab).
2. Klone das Repository.

* für den Release-Zweig: `git clone https://github.com/SillyTavern/SillyTavern -b release`
* für den Staging-Zweig: `git clone https://github.com/SillyTavern/SillyTavern -b staging`

3. `cd SillyTavern`, um in den Installationsordner zu navigieren.
4. Führe das Skript `start.sh` mit einem dieser Befehle aus:

* `./start.sh`
* `bash start.sh`

## ⚡ Installation über SillyTavern Launcher

Der SillyTavern Launcher ist ein Installationsassistent, der dir bei der Einrichtung mit vielen Optionen helfen wird, einschließlich der Installation eines Backends für lokale Inferenz.

### Für Windows-Nutzer

1. Drücke auf deiner Tastatur **`WINDOWS + R`**, um das Ausführen-Dialogfeld zu öffnen. Führe dann den folgenden Befehl aus, um git zu installieren:

```shell
cmd /c winget install -e --id Git.Git
```

2. Drücke auf deiner Tastatur **`WINDOWS + E`**, um den Datei-Explorer zu öffnen, und navigiere dann zu dem Ordner, in dem du den Launcher installieren möchtest. Gib im gewünschten Ordner in die Adressleiste `cmd` ein und drücke Enter. Führe dann den folgenden Befehl aus:

```shell
git clone https://github.com/SillyTavern/SillyTavern-Launcher.git && cd SillyTavern-Launcher && start installer.bat
```

### Für Linux-Nutzer

1. Öffne dein bevorzugtes Terminal und installiere git.
2. Klone den SillyTavern-Launcher mit:

```shell
git clone https://github.com/SillyTavern/SillyTavern-Launcher.git && cd SillyTavern-Launcher
```

3. Starte das installer.sh mit:

```shell
chmod +x install.sh && ./install.sh
```

4. Nach der Installation starte die launcher.sh mit:

```shell
chmod +x launcher.sh && ./launcher.sh
```

### Für Mac-Nutzer

1. Öffne ein Terminal und installiere brew mit:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Installiere git mit:

```shell
brew install git
```

3. Klone den SillyTavern-Launcher mit:

```shell
git clone https://github.com/SillyTavern/SillyTavern-Launcher.git && cd SillyTavern-Launcher
```

4. Starte das installer.sh mit:

```shell
chmod +x install.sh && ./install.sh
```

5. Nach der Installation starte die launcher.sh mit:

```shell
chmod +x launcher.sh && ./launcher.sh
```

## 🐋 Installation über Docker

Diese Anweisungen setzen voraus, dass du Docker installiert hast, auf deine Befehlszeile für die Installation von Containern zugreifen kannst und mit deren allgemeiner Funktionsweise vertraut bist.

### Bild selbst bauen

Wir haben einen umfassenden Leitfaden zur Nutzung von SillyTavern in Docker [hier](http://docs.sillytavern.app/installation/docker/) der Installationen auf Windows, macOS und Linux abdeckt! Lies ihn, wenn du das Bild selbst bauen möchtest.

### Verwendung des GitHub Container Registry (am einfachsten)

Du benötigst zwei zwingende Verzeichniszuordnungen und eine Portzuordnung, um SillyTavern funktionsfähig zu machen. Ersetze in dem Befehl deine Auswahl an den folgenden Stellen:

#### Container-Variablen

##### Volumen-Zuordnungen

* [config] - Das Verzeichnis, in dem die SillyTavern-Konfigurationsdateien auf deinem Host-Computer gespeichert werden
* [data] - Das Verzeichnis, in dem die Benutzerdaten von SillyTavern (einschließlich Charaktere) auf deinem Host-Computer gespeichert werden
* [plugins] - (optional) Das Verzeichnis, in dem die SillyTavern-Server-Plugins auf deinem Host-Computer gespeichert werden

##### Port-Zuordnungen

* [PublicPort] - Der Port, über den der Datenverkehr ausgegeben werden soll. Dies ist zwingend erforderlich, da du auf die Instanz von außerhalb des virtuellen Maschinencontainers zugreifst. EXPOSIERE DIES NICHT IM INTERNET, OHNE EINEN GETRENNTEN SERVICE FÜR DIE SICHERHEIT ZU IMPLEMENTIEREN.

##### Zusätzliche Einstellungen

* [DockerNet] - Das Docker-Netzwerk, mit dem der Container erstellt werden soll. Wenn du nicht weißt, was das ist, sieh dir die [offizielle Docker-Dokumentation](https://docs.docker.com/reference/cli/docker/network/) an.
* [version] - Auf der rechten Seite dieser GitHub-Seite siehst du "Packages". Wähle das Paket "sillytavern" und du siehst die Bildversionen. Das Bild-Tag "latest" hält dich auf dem Laufenden mit dem aktuellen Release. Du kannst auch "staging" und "release" Tags nutzen, die auf die nächtlichen Bilder der jeweiligen Zweige verweisen, aber das könnte unangemessen sein, wenn du Erweiterungen verwendest, die möglicherweise kaputt sind und Zeit benötigen, um aktualisiert zu werden.

#### Installationsbefehl

1. Öffne deine Befehlszeile.
2. Führe den folgenden Befehl aus:

`docker create --name='sillytavern' --net='[DockerNet]' -p '8000:8000/tcp' -v '[plugins]':'/home/node/app/plugins':'rw' -v '[config]':'/home/node/app/config':'rw' -v '[data]':'/home/node/app/data':'rw' 'ghcr.io/sillytavern/sillytavern:[version]'`

> Beachte, dass 8000 ein Standard-Listening-Port ist. Vergiss nicht, einen geeigneten Port zu verwenden, wenn du ihn in der Konfiguration änderst.

## 📱 Installation über Termux auf Android OS

> \[!HINWEIS]
> **SillyTavern kann nativ auf Android-Geräten über Termux ausgeführt werden, aber wir bieten keine offizielle Unterstützung für diesen Anwendungsfall.**
>
> **Bitte beziehe dich auf diesen Leitfaden von ArroganceComplex#2659:**
>
> * <https://rentry.org/STAI-Termux>

**Nicht unterstützte Plattform: android arm LEtime-web.** 32-Bit-Android benötigt eine externe Abhängigkeit, die nicht mit npm installiert werden kann. Verwende den folgenden Befehl, um sie zu installieren: `pkg install esbuild`. Führe dann die üblichen Installationsschritte aus.

## API-Schlüsselverwaltung

SillyTavern speichert deine API-Schlüssel in einer Datei `secrets.json` im Benutzerdatenverzeichnis (`/data/default-user/secrets.json` ist der Standardpfad).

Standardmäßig sind API-Schlüssel nach dem Speichern und Aktualisieren der Seite nicht mehr über die Benutzeroberfläche sichtbar.

Um die Ansicht deiner Schlüssel zu aktivieren:

1. Setze den Wert von `allowKeysExposure` auf `true` in der Datei `config.yaml`.
2. Starte den SillyTavern-Server neu.
3. Klicke auf den Link 'Verborgene API-Schlüssel anzeigen' in der unteren rechten Ecke des API-Verbindungsfeldes.

## Befehlszeilenargumente

Du kannst Befehlszeilenargumente beim Starten des SillyTavern-Servers übergeben, um einige Einstellungen in `config.yaml` zu überschreiben.

### Beispiele

```shell
node server.js --port 8000 --listen false
# oder
npm run start -- --port 8000 --listen false
# oder (nur Windows)
Start.bat --port 8000 --listen false
```

### Unterstützte Argumente

| Option                  | Beschreibung                                                                                          | Typ      |
|-------------------------|------------------------------------------------------------------------------------------------------|----------|
| `--version`             | Zeigt die Versionsnummer an                                                                          | boolean  |
| `--enableIPv6`          | Aktiviert IPv6.                                                                                      | boolean  |
| `--enableIPv4`          | Aktiviert IPv4.                                                                                      | boolean  |
| `--port`                | Setzt den Port, unter dem SillyTavern läuft. Wenn nicht angegeben, wird auf die YAML-Konfiguration 'port' zurückgegriffen. | number   |
| `--dnsPreferIPv6`       | Bevorzugt IPv6 für DNS. Wenn nicht angegeben, wird auf die YAML-Konfiguration 'preferIPv6' zurückgegriffen. | boolean  |
| `--autorun`             | Startet SillyTavern automatisch im Browser. Wenn nicht angegeben, wird auf die YAML-Konfiguration 'autorun' zurückgegriffen. | boolean  |
| `--autorunHostname`     | Der Autorun-Hostname, wahrscheinlich am besten auf 'auto' belassen.                                  | string   |
| `--autorunPortOverride` | Überschreibt den Port für den Autorun.                                                               | string   |
| `--listen`              | SillyTavern hört auf allen Netzwerk-Schnittstellen. Wenn nicht angegeben, wird auf die YAML-Konfiguration 'listen' zurückgegriffen. | boolean  |
| `--corsProxy`           | Aktiviert den CORS-Proxy. Wenn nicht angegeben, wird auf die YAML-Konfiguration 'enableCorsProxy' zurückgegriffen. | boolean  |
| `--disableCsrf`         | Deaktiviert den CSRF-Schutz                                                                           | boolean  |
| `--ssl`                 | Aktiviert SSL                                                                                         | boolean  |
| `--certPath`            | Pfad zu deiner Zertifikatsdatei.                                                                     | string   |
| `--keyPath`             | Pfad zu deiner privaten Schlüsseldatei.                                                              | string   |
| `--whitelist`           | Aktiviert den Whitelist-Modus                                                                         | boolean  |
| `--dataRoot`            | Wurzelverzeichnis für die Datenspeicherung                                                            | string   |
| `--avoidLocalhost`      | Vermeidet die Verwendung von 'localhost' für den Autorun im Automatikmodus.                         | boolean  |
| `--basicAuthMode`       | Aktiviert die Basis-Authentifizierung                                                                  | boolean  |
| `--requestProxyEnabled` | Aktiviert die Verwendung eines Proxys für ausgehende Anfragen                                         | boolean  |
| `--requestProxyUrl`     | Proxy-URL für Anfragen (HTTP oder SOCKS-Protokolle)                                                  | string   |
| `--requestProxyBypass`  | Liste zum Umgehen des Proxys (durch Leerzeichen getrennte Liste von Hosts)                           | array    |

## Remote-Verbindungen

In den meisten Fällen ist dies für Personen gedacht, die SillyTavern auf ihren Mobiltelefonen nutzen möchten, während ihr PC den ST-Server im selben WLAN-Netzwerk betreibt. Es kann jedoch auch verwendet werden, um Remote-Verbindungen von überall zu ermöglichen.

Lies den ausführlichen Leitfaden zur Einrichtung von Remote-Verbindungen in den [Docs](https://docs.sillytavern.app/usage/remoteconnections/).

Du möchtest vielleicht auch die SillyTavern-Benutzerprofile mit (optionalem) Passwortschutz konfigurieren: [Benutzer](https://docs.sillytavern.app/installation/st-1.12.0-migration-guide/#users).

## Leistungsprobleme?

1. Deaktiviere den Unschärfe-Effekt und aktiviere die reduzierte Bewegung im Benutzer-Settings-Panel (Kategorie UI-Themen-Umschalter).
2. Wenn du das Streaming von Antworten verwendest, setze die Streaming-FPS auf einen niedrigeren Wert (10-15 FPS werden empfohlen).
3. Stelle sicher, dass der Browser die GPU-Beschleunigung für das Rendering aktiviert hat.

## Lizenz und Danksagungen

**Dieses Programm wird in der Hoffnung verteilt, dass es nützlich ist,  
aber OHNE IRGENDEINE GARANTIE; nicht einmal die stillschweigende Garantie der  
MARKTFÄHIGKEIT oder EIGNUNG FÜR EINEN BESTIMMTEN ZWECK. Siehe die  
GNU Affero General Public License für weitere Details.**

* [TavernAI](https://github.com/TavernAI/TavernAI) 1.2.8 von Humi: MIT-Lizenz
* Teile des TavernAITurbo-Mods von CncAnon wurden mit Genehmigung verwendet
* Visual Novel-Modus inspiriert von der Arbeit von PepperTaco (<https://github.com/peppertaco/Tavern/>)
* Noto Sans Schriftart von Google (OFL-Lizenz)
* Symbolthema von Font Awesome <https://fontawesome.com> (Symbole: CC BY 4.0, Schriftarten: SIL OFL 1.1, Code: MIT-Lizenz)
* Standardinhalt von @OtisAlejandro (Seraphina-Charakter und Lorebuch) und @kallmeflocc (10K Discord-Benutzer Feierhintergrund)
* Docker-Leitfaden von [@mrguymiah](https://github.com/mrguymiah) und [@Bronya-Rand](https://github.com/Bronya-Rand)

## Top-Beitragszahler

[![Contributors](https://contrib.rocks/image?repo=SillyTavern/SillyTavern)](https://github.com/SillyTavern/SillyTavern/graphs/contributors)

<!-- LINK GROUP -->
[cover]: https://github.com/user-attachments/assets/01a6ae9a-16aa-45f2-8bff-32b5dc587e44
[discord-link]: https://discord.gg/sillytavern
[discord-shield-badge]: https://img.shields.io/discord/1100685673633153084?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=for-the-badge
