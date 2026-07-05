# Anilax Admin — Android APK (personal use)

Private admin app for contact leads and partner signups. Talks to **`https://anilaxsoftware.com`**.

## Build APK on your Mac

```bash
cd anilax-software-design
npm install
npm run android:apk
```

APK path:

`android/app/build/outputs/apk/debug/app-debug.apk`

Copy to your phone (USB, AirDrop, Google Drive) and install. Enable **Install unknown apps** if Android asks.

## Requirements

- Node.js 20+
- Android Studio (includes **JDK 21** JBR — required for Capacitor 7)
- Android SDK (via Android Studio → SDK Manager)

If `invalid source release: 21` appears, your shell `JAVA_HOME` is JDK 17. The project pins JDK 21 in `android/gradle.properties`. Stop old Gradle daemons and rebuild:

```bash
cd android && ./gradlew --stop && cd .. && npm run android:apk
```

No Android Studio? Install JDK 21: `brew install openjdk@21` and set `org.gradle.java.home` in `android/gradle.properties` to that path.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build:android` | Web build with `VITE_API_URL` + admin-only routes |
| `npm run cap:sync` | Build + copy into `android/` |
| `npm run android:apk` | Debug APK (`assembleDebug`) |
| `npm run android` | Open Android Studio |

## App identity

| Field | Value |
|-------|--------|
| Name | Anilax Admin |
| Package | `com.anilaxsoftware.admin` |

## Admin password (APK = same as website)

The APK calls **`https://anilaxsoftware.com`**. The password is **`ADMIN_PASSWORD` on the VPS**, not your Mac `.env`.

On the VPS:

```bash
grep '^ADMIN_PASSWORD=' /var/www/anilax-software-backend/.env
```

Set a new one:

```bash
nano /var/www/anilax-software-backend/.env
# ADMIN_PASSWORD=YourNewStrongPass123
systemctl restart anilax-api
```

Test in a browser: **https://anilaxsoftware.com/admin/login** — if it works there, the same password works in the APK.

## VPS deploy

After backend changes:

```bash
cd /var/www/anilax-software-backend && git pull && systemctl restart anilax-api
```

## Release APK (optional)

For a signed release build, use Android Studio → **Build → Generate Signed APK** with your own keystore.
