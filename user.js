// user.js hecho por @D4vKry
// Pagina web: https://d4vkry.github.io/
// Actualizado el 16/8/2026

// ============================================================================
// 1. TELEMETRÍA, ESTUDIOS Y RECOLECCIÓN DE DATOS
// ============================================================================
// Desactiva el envío de datos de salud y uso general
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,"); // Anula el endpoint de envío
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
// Bloquea los estudios de Normandy y Shield (Inyecciones remotas)
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
// Desactiva los reportes de cuelgues (Crash Reports)
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// ============================================================================
// 2. PREFETCHING Y CONEXIONES ESPECULATIVAS
// ============================================================================
user_pref("network.prefetch-next", false); // Evita descargar webs enteras anticipadamente
user_pref("network.dns.disablePrefetch", true); // Detiene la resolución DNS anticipada
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false); // Desactiva conexiones al pasar el ratón por encima de enlaces


// ============================================================================
// 3. WEBRTC Y FUGAS DE RED
// ============================================================================
// OPCCIÓN A: Deshabilitar WebRTC por completo (Rompe llamadas de voz/vídeo web)
// user_pref("media.peerconnection.enabled", false);

// OPCIÓN B: Restringir WebRTC para que pase por el proxy/VPN y no filtre IPs locales
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.no_host", true);

// Prevenir bypass de proxys
user_pref("network.proxy.socks_remote_dns", true); // Fuerza a que las consultas DNS vayan por el túnel SOCKS

// ============================================================================
// 4. RESISTENCIA AL FINGERPRINTING
// ============================================================================
user_pref("privacy.resistFingerprinting", true);
// Fuerza el aislamiento dinámico de cookies y almacenamiento (dFPI)
user_pref("network.cookie.cookieBehavior", 5); // 5 = Total Cookie Protection
// Previene el rastreo a través del estado de la batería o el tipo de conexión
user_pref("dom.battery.enabled", false);
// Desactiva la API de Gamepad (usada frecuentemente para fingerprinting de hardware)
user_pref("dom.gamepad.enabled", false);

// ============================================================================
// 5. REDUCCIÓN DE SUPERFICIE DE ATAQUE
// ============================================================================
// Deshabilitar WebGL (Evita fingerprinting de GPU y vulnerabilidades de drivers gráficos)
user_pref("webgl.disabled", true);
// Evita que las páginas web manipulen el portapapeles de forma silenciosa
user_pref("dom.event.clipboardevents.enabled", false);
// Bloquea el acceso a la geolocalización a nivel de núcleo del navegador
user_pref("geo.enabled", false);

// --- SECCIÓN EXTREMA: Deshabilitar JIT (IonMonkey / Baseline) ---
// ADVERTENCIA: Esto hace que Firefox sea significativamente más lento en sitios web pesados,
// pero elimina clases enteras de vulnerabilidades de corrupción de memoria y ejecución de código.
// user_pref("javascript.options.ion", false);
// ser_pref("javascript.options.baselinejit", false);
// user_pref("javascript.options.wasm", false);

// ============================================================================
// 6. LIMPIEZA DE LA PÁGINA DE NUEVA PESTAÑA (ACTIVITY STREAM)
// ============================================================================
// Desactiva los accesos directos patrocinados (Amazon, Temu, etc.)
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Desactiva la sección de Pocket, el clima y otros feeds que consumen red
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.weatherfeed", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.system.showWeather", false);
