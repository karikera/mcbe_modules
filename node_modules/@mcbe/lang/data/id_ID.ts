
import { freeze } from './freeze';
import { LangId } from './langid';
const lang_data = {
    id: "id_ID" as LangId,
    commands:{
        "ability_description": "Menetapkan kemampuan pemain.",
        "ability_noability": "Tidak ada kemampuan bernama '%1$s' yang tersedia",
        "ability_granted": "Kemampuan '%1$s' telah diberikan kepadamu",
        "ability_revoked": "Kemampuan '%1$s' telah dicabut darimu",
        "ability_success": "Kemampuan telah diperbarui",
        "achievement_alreadyHave": "Pemain %1$s telah memiliki prestasi %2$s",
        "achievement_description": "Memberikan atau menghapus prestasi dari pemain.",
        "achievement_dontHave": "Pemain %1$s tidak memiliki prestasi %2$s",
        "achievement_give_success_all": "Berhasil memberikan semua prestasi ke %1$s",
        "achievement_give_success_one": "Berhasil memberi %1$s status %2$s",
        "achievement_statTooLow": "Pemain %1$s tidak memiliki status %2$s",
        "achievement_take_success_all": "Berhasil mengambil semua prestasi dari %1$s",
        "achievement_take_success_one": "Berhasil mengambil status %1$s dari %2$s",
        "achievement_unknownAchievement": "Prestasi atau statistik yang tidak diketahui '%1$s'",
        "agent_attack_success": "Agen berhasil menyerang",
        "agent_attack_failed": "Agen gagal menyerang",
        "agent_collect_success": "Agen berhasil mengumpulkan",
        "agent_collect_failed": "Agen gagal mengumpulkan",
        "agent_createagent_success": "Agen Dibuat",
        "agent_createagent_failed": "Tidak bisa membuat Agen",
        "agent_destroy_success": "Agen menghancurkan blok",
        "agent_destroy_failed": "Agen gagal menghancurkan",
        "agent_detect_success": "Agen berhasil mendeteksi",
        "agent_detect_failed": "Agen gagal mendeteksi",
        "agent_detectredstone_success": "Agen berhasil detectredstone",
        "agent_detectredstone_failed": "Agen gagal detectredstone",
        "agent_drop_success": "Agen berhasil menjatuhkan",
        "agent_drop_failed": "Agen gagal menjatuhkan",
        "agent_dropall_success": "Agen berhasil dropall",
        "agent_dropall_failed": "Agen gagal dropall",
        "agent_getitemcount_success": "Agen berhasil getitemcount",
        "agent_getitemcount_failed": "Agen gagal getitemcount",
        "agent_getitemspace_success": "Agen berhasil getitemspace",
        "agent_getitemspace_failed": "Agen gagal getitemspace",
        "agent_getitemdetail_success": "Agen berhasil getitemdetail",
        "agent_getitemdetail_failed": "Agen gagal getitemdetail",
        "agent_getposition_success": "Agen getposition berhasil",
        "agent_getposition_failed": "Agen getposition gagal",
        "agent_inspect_success": "Agen berhasil memeriksa",
        "agent_inspect_failed": "Agen gagal memeriksa",
        "agent_inspectdata_success": "Agen berhasil memeriksa data",
        "agent_inspectdata_failed": "Agen gagal memeriksa data",
        "agent_move_success": "Agen berhasil bergerak",
        "agent_move_failed": "Tidak bisa menggerakkan Agen",
        "agent_outofrange": "Tidak bisa mengeluarkan perintah, Agen di luar jangkauan",
        "agent_place_success": "Agen berhasil menempatkan",
        "agent_place_failed": "Agen gagal menempatkan",
        "agent_setitem_success": "Agen set item berhasil",
        "agent_setitem_failed": "Agen gagal menetapkan item",
        "agent_turn_success": "Agen berhasil berputar",
        "agent_turn_failed": "Tidak bisa memutar Agen",
        "agent_till_success": "Agen berhasil mengolah",
        "agent_till_failed": "Agen gagal mengolah",
        "agent_tpagent_description": "Teleportasi Agenmu.",
        "agent_tpagent_success": "Agen diteleportasi",
        "agent_tpagent_failed": "Agen gagal diteleportasi",
        "agent_transfer_success": "Transfer agen berhasil",
        "agent_transfer_failed": "Agen gagal ditransfer",
        "always_day": "Siklus Siang-Malam %1$s",
        "always_day_locked": "Siklus Siang-Malam dikunci",
        "always_day_unlocked": "Siklus Siang-Malam dibuka",
        "ban_description": "Menambahkan pemain ke daftar blokir.",
        "autocomplete_a": "semua pemain",
        "autocomplete_c": "Agent saya",
        "autocomplete_e": "semua entitas",
        "autocomplete_p": "pemain terdekat",
        "autocomplete_r": "pemain acak",
        "autocomplete_s": "diri sendiri",
        "autocomplete_v": "semua Agent",
        "ban_failed": "Tidak bisa melarang pemain %1$s",
        "ban_success": "Pemain yang dilarang %1$s",
        "banip_description": "Menambahkan alamat IP ke daftar blokir.",
        "banip_invalid": "Kamu memasukkan alamat IP yang tidak valid atau pemain yang tidak online",
        "banip_success": "Alamat IP %1$s dilarang",
        "banip_success_players": "Alamat IP %1$s yang dilarang milik %2$s",
        "banlist_ips": "Ada %1$d total alamat IP yang dilarang:",
        "banlist_players": "Ada %1$d total pemain yang dilarang:",
        "blockdata_description": "Memodifikasi tag data blok.",
        "blockdata_placeFailed": "Kamu tidak bisa menempatkan blok di sini",
        "blockdata_destroyFailed": "Kamu tidak bisa menggali di sini",
        "blockdata_failed": "Tag data tidak berubah: %1$s",
        "blockdata_notValid": "Blok target bukan blok pemegang data",
        "blockdata_outOfWorld": "Tidak bisa mengubah blok di luar dunia",
        "blockdata_success": "Data blok diperbarui menjadi: %1$s",
        "blockdata_tagError": "Penguraian tag data gagal: %1$s",
        "bossbar_add_success": "Membuat bossbar kustom [%1$s]",
        "bossbar_add_failure_invalid": "ID bossbar tidak valid. ID harus dalam format namespace:id atau id (default ke namespace minecraft).",
        "bossbar_add_failure_exists": "Sudah ada bossbar dengan ID '%1$s'",
        "bossbar_description": "Membuat dan memodifikasi bar bos",
        "bossbar_get_max": "Bossbar kustom [%1$s] memiliki maksimum %2$d",
        "bossbar_get_players": "Bossbar kustom [%1$s] memiliki %2$s pemain yang sedang online: %3$s",
        "bossbar_get_players_none": "Bossbar kustom [%1$s] tidak memiliki pemain yang sedang online",
        "bossbar_get_players_one": "Bossbar kustom [%1$s] memiliki 1 pemain yang sedang online: %2$s",
        "bossbar_get_value": "Bossbar kustom [%1$s] memiliki nilai %2$d",
        "bossbar_get_visible_true": "Bossbar kustom [%1$s] saat ini ditampilkan",
        "bossbar_get_visible_false": "Bossbar kustom [%1$s] saat ini disembunyikan",
        "bossbar_list": "Ada %1$s bossbar kustom yang aktif: %2$s",
        "bossbar_list_none": "Tidak ada bossbar kustom yang aktif",
        "bossbar_list_one": "Ada 1 bossbar kustom yang aktif: %1$s",
        "bossbar_notFound": "Tidak ada bossbar dengan ID '%1$s'",
        "bossbar_remove": "Menghapus bossbar kustom [%1$s]",
        "change_setting_description": "Mengubah pengaturan pada server khusus yang berjalan.",
        "change_setting_success": "%1$s telah diubah",
        "chunkinfo_compiled": "Gugus dikompilasi.",
        "chunkinfo_data": "64 puncak pertama adalah: %1$s",
        "chunkinfo_empty": "Gugus kosong.",
        "chunkinfo_hasLayers": "Gugus memiliki lapisan: %1$s",
        "chunkinfo_hasNoRenderableLayers": "Gugus tidak memiliki lapisan yang bisa dirender.",
        "chunkinfo_isEmpty": "Gugus memiliki lapisan kosong: %1$s",
        "chunkinfo_location": "Lokasi gugus: (%1$d, %2$d, %3$d)",
        "chunkinfo_noChunk": "Tidak ada gugus yang ditemukan pada posisi gugus %1$d, %2$d, %3$d",
        "chunkinfo_notCompiled": "Gugus tidak dikompilasi.",
        "chunkinfo_notEmpty": "Gugus tidak kosong.",
        "chunkinfo_vertices": "Buffer lapisan %1$s berisi %2$d puncak",
        "classroommode_description": "Coba meluncurkan dan menyambungkan ke Mode Kelas.",
        "classroommode_success": "Mencoba meluncurkan Mode Kelas...",
        "clear_description": "Menghapus item dari persediaan pemain.",
        "clear_failure": "Tidak bisa mengosongkan persediaan %1$s",
        "clear_failure_no_items": "Tidak bisa mengosongkan persediaan %1$s, tidak ada item untuk dihapus",
        "clear_success": "Mengosongkan persediaan %1$s, menghapus %2$d item",
        "clear_tagError": "Penguraian tag data gagal: %1$s",
        "clear_testing": "%1$s memiliki %2$d item yang cocok dengan kriteria",
        "clearfixedinv_description": "Menghapus semua Slot Persediaan Tetap.",
        "clearfixedinv_success": "Mengosongkan Persediaan Tetap",
        "clone_description": "Mengkloning blok dari satu wilayah ke wilayah lain.",
        "clone_failed": "Tidak ada blok yang dikloning",
        "clone_filtered_error": "Penggunaan yang difilter mengharuskan blok filter ditentukan",
        "clone_noOverlap": "Sumber dan tujuan tidak bisa ditumpang tindih",
        "clone_outOfWorld": "Tidak bisa mengakses blok di luar dunia",
        "clone_success": "%1$d blok dikloning",
        "clone_tooManyBlocks": "Terlalu banyak blok di area tertentu (%1$d > %2$d)",
        "closechat_description": "Menutup jendela obrolan pemain lokal jika terbuka.",
        "closechat_success": "Obrolan ditutup",
        "closechat_failure": "Obrolan tidak terbuka",
        "closewebsocket_description": "Menutup sambungan websocket jika ada.",
        "code_description": "Meluncurkan Pembuat Kode.",
        "code_success": "Telah meluncurkan Pembuat Kode.",
        "compare_failed": "Sumber dan tujuan tidak identik",
        "compare_outOfWorld": "Tidak bisa mengakses blok di luar dunia",
        "compare_success": "%1$d blok dibandingkan",
        "compare_tooManyBlocks": "Terlalu banyak blok di area tertentu (%1$d > %2$d)",
        "corruptworld_description": "Merusak dunia yang dimuat di server.",
        "corruptworld_success": "Berhasil merusak dunia.",
        "daylock_description": "Mengunci dan membuka siklus siang-malam.",
        "debug_description": "Memulai atau menghentikan sesi debug.",
        "debug_notStarted": "Tidak bisa menghentikan pembuatan profil yang belum dimulai!",
        "debug_start": "Memulai pembuatan profil debug",
        "debug_stop": "Menghentikan pembuatan profil debug setelah %.2f detik (%1$d tick)",
        "defaultgamemode_description": "Mengatur mode permainan default.",
        "defaultgamemode_success": "Mode permainan default dunia sekarang adalah %1$s",
        "deop_description": "Mencabut status operator dari pemain.",
        "deop_failed": "Tidak bisa di-de-op (tingkat izin terlalu tinggi): %s",
        "deop_success": "Di-de-op: %s",
        "deop_message": "Kamu telah di-de-op",
        "difficulty_description": "Mengatur tingkat kesulitan.",
        "difficulty_usage": "/difficulty <level kesulitan baru>",
        "difficulty_success": "Atur kesulitan permainan ke %1$s",
        "downfall_success": "Mengalihkan ke hujan",
        "effect_description": "Menambah atau menghapus efek status.",
        "effect_failure_notActive": "Tidak bisa mengambil %1$s dari %2$s karena tidak memiliki efek",
        "effect_failure_notActive_all": "Tidak bisa mengambil efek apa pun dari %1$s karena tidak punya",
        "effect_failure_notAMob": "%1$s tidak bisa memiliki efek",
        "effect_notFound": "Tidak ada efek mob tersebut dengan ID %s",
        "effect_success": "Memberikan %1$s * %2$d ke %3$s selama %4$d detik",
        "effect_success_removed": "Mengambil %1 $s dari %2$s",
        "effect_success_removed_all": "Mengambil semua efek dari %1$s",
        "enchant_cantCombine": "%1$s tidak bisa digabungkan dengan %2$s",
        "enchant_invalidLevel": "%1$s tidak mendukung level %2$d",
        "enchant_cantEnchant": "Sihir yang dipilih tidak bisa ditambahkan ke item target: %1$s",
        "enchant_description": "Menambahkan sihir ke item yang dipilih pemain.",
        "enchant_noItem": "Target tidak memegang item: %1$s",
        "enchant_notFound": "Tidak ada sihir tersebut dengan ID %1$d",
        "enchant_success": "Berhasil menyihir %1$s",
        "entitydata_description": "Memodifikasi tag data entitas.",
        "entitydata_failed": "Tag data tidak berubah: %1$s",
        "entitydata_noPlayers": "%1$s adalah pemain dan tidak bisa diubah",
        "entitydata_success": "Data entitas diperbarui menjadi: %1$s",
        "entitydata_tagError": "Penguraian tag data gagal: %1$s",
        "execute_allInvocationsFailed": "Semua panggilan gagal: '%1$s'",
        "execute_failed": "Gagal mengeksekusi '%1$s' sebagai %2$s",
        "execute_description": "Mengeksekusi perintah atas nama satu entitas atau lebih.",
        "fill_description": "Mengisi seluruh atau bagian dari wilayah dengan blok tertentu.",
        "fill_failed": "Tidak ada blok yang diisi",
        "fill_outOfWorld": "Tidak bisa menempatkan blok di luar dunia",
        "fill_success": "%1$d blok diisi",
        "fill_tagError": "Penguraian tag data gagal: %1$s",
        "fill_tooManyBlocks": "Terlalu banyak blok di area tertentu (%1$d > %2$d)",
        "fill_replace_auxvalue_invalid": "Ganti nilai data tidak valid untuk blok %1$s",
        "function_description": "Menjalankan perintah yang terdapat di file fungsi terkait.",
        "function_functionNameNotFound": "Fungsi %1$s tidak ditemukan.",
        "function_invalidCharacters": "Fungsi dengan judul '%s' tidak valid, karakter '%s' tidak diperbolehkan dalam nama fungsi.",
        "function_noEngineVersionSpecified": "Fungsi %s tidak bisa dijalankan. Kamu harus menentukan min_engine_version di manifest.json paket perilaku.",
        "function_success": "Berhasil menjalankan %1$d entri fungsi.",
        "gamemode_description": "Menetapkan mode permainan pemain.",
        "gamemode_success_other": "Mode permainan %2$s diatur ke %1$s",
        "gamemode_success_self": "Mode permainan sendiri diatur ke %1$s",
        "gamemode_fail_invalid": "Mode permainan '%1$s' tidak valid",
        "gamerule_description": "Mengatur atau mengkueri nilai aturan permainan.",
        "gamerule_type_invalid": "Jenis yang tidak valid digunakan untuk aturan permainan '%1$s'",
        "gamerule_type_nocheatsenabled": "Peraturan permainan '%1$s' hanya bisa digunakan jika cara curang diaktifkan di dunia ini.",
        "gamerule_nopermission": "Hanya pemilik server yang bisa mengubah '%1$s'",
        "gamerule_norule": "Tidak ada aturan permainan bernama '%1$s' yang tersedia",
        "gamerule_success": "Aturan permainan %1$s telah diperbarui menjadi %2$s",
        "generic_async_initiated": "Perintah '%1$s' dimulai (langkah asinkron %2$d)",
        "generic_boolean_invalid": "'%1$s' tidak benar atau salah",
        "generic_chunk_notFound": "Gugus yang ditentukan tidak ditemukan",
        "generic_componentError": "Penguraian daftar komponen gagal",
        "generic_dimension_notFound": "Dimensi yang ditentukan tidak ditemukan",
        "generic_disabled": "Cheat tidak diaktifkan pada level ini.",
        "generic_disabled_templateLocked": "Saat ini pengaturan dikunci. Buka kunci Opsi Dunia Template di Pengaturan Permainan untuk mengubahnya.",
        "generic_double_tooBig": "Angka yang telah kamu masukkan (%.2f) terlalu besar, maksimum %.2f",
        "generic_double_tooSmall": "Angka yang telah kamu masukkan (%.2f) terlalu kecil, minimum %.2f",
        "generic_duplicateType": "Argumen jenis duplikat",
        "generic_duplicateSelectorArgument": "Argumen pemilih %s duplikat",
        "generic_encryption_badkey": "Kunci publik buruk diberikan. Kunci 120 byte diharapkan setelah pemformatan PEM.",
        "generic_encryption_badsalt": "Salt buruk diberikan. 16 byte diharapkan sebelum pengkodean 64 dasar.",
        "generic_encryption_required": "Sesi terenkripsi diperlukan",
        "generic_entity_invalidType": "Jenis entitas '%1$s' tidak valid",
        "generic_entity_invalidUuid": "UUID entitas yang diberikan berada dalam format yang tidak valid",
        "generic_entity_notFound": "Entitas tersebut tidak bisa ditemukan",
        "generic_exception": "Terjadi kesalahan yang tidak diketahui sewaktu mencoba melakukan perintah ini",
        "generic_invalidAgentType": "Argumen jenis diterapkan ke pemilih hanya Agent",
        "generic_invalidcontext": "Konteks yang tidak valid diberikan untuk jenis perintah tertentu",
        "generic_invalidDevice": "Perintah yang dimasukkan, %s, tidak didukung di perangkat ini",
        "generic_invalidPlayerType": "Argumen jenis diterapkan ke pemilih hanya pemain",
        "generic_invalidType": "Argumen jenis tidak diketahui",
        "generic_levelError": "Tingkat maks. harus lebih dari tingkat min.",
        "generic_malformed_body": "Badan hilang atau berubah bentuk",
        "generic_malformed_type": "Jenis permintaan tidak valid",
        "generic_notimplemented": "Tidak diterapkan",
        "generic_num_invalid": "'%1$s' bukan angka yang valid",
        "generic_num_tooBig": "Angka yang telah kamu masukkan (%1$d) terlalu besar, maksimum %2$d",
        "generic_num_tooSmall": "Angka yang telah kamu masukkan (%1$d) terlalu kecil, minimum %2$d",
        "generic_parameter_invalid": "'%1$s' bukan parameter yang valid",
        "generic_permission_selector": "<izin tidak memadai untuk ekspansi pemilih>",
        "generic_player_notFound": "Pemain tersebut tidak bisa ditemukan",
        "generic_protocol_mismatch": "Versi protokol yang diberikan tidak sesuai dengan versi protokol Minecraft",
        "generic_radiusError": "Radius pemilih minimum harus kurang dari maksimum",
        "generic_radiusNegative": "Radius tidak boleh negatif",
        "generic_rotationError": "Rotasi di luar kisaran",
        "generic_running": "Perintah sudah dijalankan",
        "generic_step_failed": "Langkah perintah gagal",
        "generic_syntax": "Kesalahan sintaks: Tidak terduga \"%2$s\": di \"%1$s>>%2$s<<%3$s\"",
        "generic_noTargetMatch": "Tidak ada target yang cocok dengan pemilih",
        "generic_targetNotPlayer": "Pemilih harus jenis pemain",
        "generic_tooManyNames": "Terlalu banyak argumen nama target",
        "generic_tooManyTargets": "Terlalu banyak target yang cocok dengan pemilih",
        "generic_too_many_requests": "Terlalu banyak perintah yang diminta, tunggu satu untuk diselesaikan",
        "generic_unknown": "Perintah tidak diketahui: %s. Periksa bahwa perintah ada dan bahwa kamu memiliki izin untuk menggunakannya.",
        "generic_usage": "Penggunaan: %1$s",
        "generic_usage_noparam": "Penggunaan:",
        "generic_version_mismatch": "Versi yang diminta tidak ada untuk perintah ini",
        "generic_version_missing": "Panggilan perintah yang bukan dari obrolan harus menentukan versi perintah",
        "getchunkdata_description": "Mendapatkan piksel untuk gugus tertentu.",
        "getchunkdata_success": "Data gugus diterima",
        "getchunks_description": "Mendapatkan daftar gugus yang dimuat.",
        "getchunks_success": "Daftar gugus diterima",
        "getlocalplayername_description": "Mengembalikan nama pemain lokal.",
        "getspawnpoint_description": "Mendapatkan posisi kemunculan pemain yang ditentukan.",
        "gettopsolidblock_description": "Mendapatkan posisi blok non-udara atas di bawah posisi yang ditentukan",
        "gettopsolidblock_notfound": "Tidak ada blok solid di bawah posisi yang ditentukan",
        "give_block_notFound": "Tidak ada blok tersebut dengan nama %1$d",
        "give_description": "Memberikan item kepada pemain.",
        "give_item_invalid": "Sintaks perintah tidak valid: tidak ada %s dengan nilai data tersebut",
        "give_item_notFound": "Tidak ada item tersebut dengan nama %1$d",
        "give_map_invalidData": "Data peta yang dimasukkan tidak valid",
        "give_map_featureNotFound": "Tidak bisa membuat peta eksplorasi. Fitur tidak ditemukan pada dimensi ini",
        "give_success": "Memberikan %1$s * %2$d ke %3$s",
        "give_successRecipient": "Kamu telah diberi %1$s * %2$d",
        "give_tagError": "Penguraian tag data gagal: %1$s",
        "help_description": "Memberikan bantuan/daftar perintah.",
        "help_footer": "Tips: Gunakan tombol <tab> saat mengetik perintah untuk menyelesaikan perintah atau argumen secara otomatis",
        "help_header": "--- Menampilkan halaman bantuan %1$d dari %2$d (/help <halaman>) ---",
        "help_command_aliases": "%s (juga %s):",
        "immutableworld_description": "Menetapkan status dunia yang tidak dapat diubah.",
        "immutableworld_info": "immutableworld = %s",
        "kick_description": "Menendang pemain dari server.",
        "kick_description_edu": "Mengeluarkan pemain dari permainan.",
        "kick_not_found": "Tidak bisa menemukan pemain %1$s",
        "kick_not_yourself": "Kamu tidak bisa mengeluarkan diri sendiri dari permainan",
        "kick_success": "Menendang %1$s dari permainan",
        "kick_success_reason": "Menendang %1$s dari permainan: '%2$s'",
        "kick_success_reasonedu": "Mengeluarkan %1$s dari permainan: '%2$s'",
        "kick_no_host": "Host tidak bisa dikeluarkan dari permainan.",
        "kick_no_teacher": "Guru tidak bisa dikeluarkan dari permainan.",
        "kill_successful_edu": "Menghapus %1$s",
        "kill_successful": "Membunuh %1$s",
        "kill_description_edu": "Menghapus entitas (pemain, mob, dsb.).",
        "kill_description": "Membunuh entitas (pemain, mob, dll.).",
        "list_description": "Menampilkan daftar pemain pada server.",
        "locate_description": "Menampilkan koordinat untuk struktur terdekat dari jenis tertentu.",
        "locate_fail_noplayer": "Perintah hanya bisa digunakan oleh pemain yang valid",
        "locate_fail_nostructurefound": "Tidak ada struktur valid yang ditemukan dalam dimensi ini",
        "locate_success": "%1$s terdekat berada di blok %2$s, (y?), %3$s",
        "togglecontentlog_toggle": "Mengaktifkan/Menonaktifkan perintah log konten",
        "togglecontentlog_enabled": "Log Konten Diaktifkan",
        "togglecontentlog_disabled": "Log Konten Dinonaktifkan",
        "me_description": "Menampilkan pesan tentang diri sendiri.",
        "message_display_incoming": "%1$s berbisik kepadamu: %2$s",
        "message_display_outgoing": "Kamu berbisik ke %1$s: %2$s",
        "message_sameTarget": "Kamu tidak bisa mengirim pesan pribadi kepada diri sendiri!",
        "mixer_description": "Kontrol Interaktivitas Mixer",
        "mixer_error_unknown": "Terjadi kesalahan Mixer yang tidak diketahui.",
        "mixer_error_notoken": "Kamu perlu masuk dengan Akun Microsoft untuk mengaktifkan interaktivitas Mixer.",
        "mixer_error_notsupported": "Perangkat yang kamu gunakan tidak mendukung interaktivitas Mixer.",
        "mixer_interactive_error": "Terjadi kesalahan Mixer: %1$s",
        "mixer_scene_failed": "Tidak ada pemandangan bernama %1$s. Pastikan kamu telah memasukkan nama pemandangan dengan benar.",
        "mixer_scene_success": "Pemandangan diubah ke: %1$s",
        "mixer_start_success": "Interaktif Mixer dimulai: %1$s",
        "mixer_start_fail_invalidCode": "Tidak dapat menemukan proyek dengan ID \"%1$s\". Pastikan ID atau kode berbagi benar.",
        "mixer_stop_success": "Interaktif Mixer dihentikan.",
        "mixer_stop_fail": "Tidak ada sesi interaktif untuk dihentikan.",
        "mixer_status_notinitialized": "Interaktivitas tidak diinisialisasi.",
        "mixer_status_enabled": "Interaktivitas diaktifkan.",
        "mixer_status_initializing": "Interaktivitas diinisialisasi.",
        "mixer_status_pending": "Interaktivitas tertunda.",
        "mixer_status_disabled": "Interaktivitas dinonaktifkan.",
        "mixer_activatedbutton": "%1$s mengaktifkan %2$s.",
        "mobevent_description": "Mengontrol acara mob yang diizinkan untuk dijalankan.",
        "mobevent_eventsEnabledSetToTrue": "Acara Mob kini diaktifkan. Acara individual yang diatur ke false tidak akan dijalankan.",
        "mobevent_eventsEnabledSetToFalse": "Acara Mob kini dinonaktifkan. Acara individual tidak akan dijalankan.",
        "mobevent_eventsEnabledIsTrue": "Acara Mob diaktifkan. Acara individual yang diatur ke false tidak akan dijalankan.",
        "mobevent_eventsEnabledIsFalse": "Acara Mob dinonaktifkan. Acara individual tidak akan dijalankan.",
        "mobevent_eventSetToTrue": "Acara Mob %s (id: %s) diatur ke true.",
        "mobevent_eventSetToTrueButEventsDisabled": "Acara Mob %s (id: %s) diatur ke true, tetapi Acara Mob dinonaktifkan.",
        "mobevent_eventSetToFalse": "Acara Mob %s (id: %s) diatur ke false.",
        "mobevent_eventIsTrue": "Acara Mob %s (id: %s) diatur ke true.",
        "mobevent_eventIsTrueButEventsDisabled": "Acara Mob %s (id: %s) diatur ke true, tetapi Acara Mob dinonaktifkan.",
        "mobevent_eventIsFalse": "Acara Mob %s (id: %s) diatur ke false.",
        "op_description": "Memberikan status operator kepada pemain.",
        "op_failed": "Tidak bisa melakukan op (sudah op atau di atasnya): %s",
        "op_success": "Di-op: %s",
        "op_message": "Kamu telah di-op",
        "origin_commandblock": "CommandBlock",
        "origin_external": "Eksternal",
        "origin_devconsole": "DevConsole",
        "origin_script": "Mesin Skrip",
        "origin_server": "Server",
        "origin_teacher": "Guru",
        "ops_description": "Memuat ulang dan memberlakukan izin Op.",
        "ops_reloaded": "Op dimuat ulang dari file.",
        "ops_set_success": "Berhasil mengatur level operator untuk pemain %s.",
        "permissions_description": "Memuat ulang dan menerapkan izin.",
        "permissions_reloaded": "Izin dimuat ulang dari file.",
        "permissions_set_failed": "Tidak dapat mengatur level izin %s untuk pemain %s.",
        "permissions_set_success": "Berhasil mengatur level izin %s untuk pemain %s.",
        "permissions_save_failed": "Tidak dapat menyimpan level izin %s untuk pemain %s.",
        "permissions_save_success": "Berhasil menyimpan level izin %s untuk pemain %s.",
        "spawnParticleEmitter_description": "Membuat pemancar partikel",
        "particle_description": "Membuat partikel.",
        "particle_notFound": "Nama efek tidak diketahui (%1$s)",
        "particle_success": "Efek bermain %1$s untuk %2$d kali",
        "players_list": "Ada %1$d/%2$d pemain online:",
        "players_list_names": "%s",
        "playsound_description": "Memutar suara.",
        "playsound_playerTooFar": "Pemain %1$s terlalu jauh untuk mendengar suara",
        "playsound_success": "Memutar suara '%1$s' ke %2$s",
        "position_description": "Aktifkan/nonaktifkan koordinat untuk pemain.",
        "publish_failed": "Tidak bisa meng-hosting permainan lokal",
        "publish_started": "Permainan lokal di-hosting pada port %1$s",
        "querytarget_description": "Mendapatkan informasi transformasi, nama, dan id tentang entitas target tertentu.",
        "querytarget_success": "Data target: %1$s",
        "reload_description": "Memuat ulang semua file fungsi dari semua paket perilaku.",
        "reload_success": "File fungsi yang ada telah dimuat ulang. Mulai ulang Minecraft untuk memuat ulang fungsi BARU.",
        "replaceitem_description": "Mengganti item di persediaan.",
        "replaceitem_failed": "Tidak bisa mengganti %s slot %d dengan %d * %s",
        "replaceitem_keepFailed": "Sudah ada item yang menempati %s slot %d.",
        "replaceitem_noContainer": "Blok di %s bukan kontainer",
        "replaceitem_badSlotNumber": "Tidak bisa mengganti slot %d, harus nilai antara %d dan %d.",
        "replaceitem_success": "Mengganti %s slot %d dengan %d * %s",
        "replaceitem_success_entity": "Mengganti %s slot %d dari %s dengan %d * %s",
        "replaceitem_tagError": "Penguraian tag data gagal: %1$s",
        "save_description": "Mengontrol atau memeriksa cara permainan menyimpan data ke disk.",
        "save_disabled": "Menonaktifkan penyimpanan otomatis dunia",
        "save_enabled": "Mengaktifkan penyimpanan otomatis dunia",
        "save_failed": "Menyimpan gagal: %1$s",
        "save_start": "Menyimpan...",
        "save_success": "Menyimpan dunia",
        "save_all_error": "Terjadi kesalahan saat mencoba menjeda penyimpanan level.",
        "save_all_success": "Data disimpan. File sekarang siap disalin.",
        "save_off_alreadyOff": "Penyimpanan sudah dinonaktifkan.",
        "save_on_alreadyOn": "Penyimpanan sudah diaktifkan.",
        "save_on_notDone": "Penyimpanan sebelumnya belum selesai.",
        "save_on_description": "Mengaktifkan penyimpanan server otomatis.",
        "save_on_success": "Perubahan ke level dilanjutkan.",
        "save_state_description": "Memeriksa apakah simpan semua sebelumnya telah selesai dan mencantumkan file yang tercakup.",
        "say_description": "Mengirim pesan dalam obrolan kepada pemain lain.",
        "scoreboard_description": "Melacak dan menampilkan skor untuk berbagai sasaran.",
        "scoreboard_allMatchesFailed": "Semua pencocokan gagal",
        "scoreboard_noMultiWildcard": "Hanya satu pengguna wildcard yang diizinkan",
        "scoreboard_objectiveNotFound": "Tidak ada sasaran dengan nama '%1$s'",
        "scoreboard_objectiveReadOnly": "Sasaran '%1$s' hanya dapat dibaca dan tidak bisa diatur",
        "scoreboard_objectives_add_alreadyExists": "Sasaran dengan nama '%1$s' sudah ada",
        "scoreboard_objectives_add_displayTooLong": "Nama tampilan '%1$s' terlalu panjang untuk sasaran, panjang maksimum %2$d karakter",
        "scoreboard_objectives_add_success": "Berhasil menambahkan sasaran baru '%1$s'",
        "scoreboard_objectives_add_tooLong": "Nama '%1$s' terlalu panjang untuk sasaran, panjang maksimum %2$d karakter",
        "scoreboard_objectives_add_wrongType": "Jenis kriteria sasaran tidak valid '%1$s'",
        "scoreboard_objectives_add_needName": "Sasaran memerlukan nama.",
        "scoreboard_objectives_description": "Ubah sasaran papan skor.",
        "scoreboard_objectives_list_count": "Menampilkan %1$d sasaran di papan skor:",
        "scoreboard_objectives_list_empty": "Tidak ada sasaran di papan skor",
        "scoreboard_objectives_list_entry": "- %1$s: ditampilkan sebagai '%2$s' dan adalah jenis '%3$s'",
        "scoreboard_objectives_remove_success": "Sasaran '%1$s' berhasil dihapus",
        "scoreboard_objectives_setdisplay_invalidSlot": "Tidak ada slot tampilan semacam ini '%1$s'",
        "scoreboard_objectives_setdisplay_successCleared": "Mengosongkan slot tampilan sasaran '%1$s'",
        "scoreboard_objectives_setdisplay_successSet": "Atur sasaran tampilan di slot '%1$s' ke '%2$s'",
        "scoreboard_players_add_success": "Menambahkan %1$d ke [%2$s] untuk %3$s (sekarang %4$d)",
        "scoreboard_players_add_multiple_success": "Menambahkan %1$d ke [%2$s] untuk %3$d entitas",
        "scoreboard_players_nameNotFound": "Nama pemain harus diberikan.",
        "scoreboard_players_enable_noTrigger": "Sasaran %1$s bukan pemicu",
        "scoreboard_players_enable_success": "Mengaktifkan pemicu %1$s untuk %2$s",
        "scoreboard_players_list_count": "Menampilkan %1$d pemain yang dilacak di papan skor:",
        "scoreboard_players_list_empty": "Tidak ada pemain yang dilacak di papan skor",
        "scoreboard_players_list_player_count": "Menampilkan %1$d sasaran yang dilacak untuk %2$s:",
        "scoreboard_players_list_player_empty": "Pemain %1$s tidak memiliki nilai yang tercatat",
        "scoreboard_players_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_players_operation_invalidOperation": "Operasi tidak valid %1$s",
        "scoreboard_players_operation_notFound": "Skor %1$s untuk %2$s tidak ditemukan",
        "scoreboard_players_operation_success": "Memperbarui [%1$s] untuk %2$d entitas",
        "scoreboard_players_offlinePlayerName": "Pemain Offline",
        "scoreboard_players_random_invalidRange": "Min %1$d tidak kurang dari maks %2$d",
        "scoreboard_players_remove_success": "Menghapus %1$d dari [%2$s] untuk %3$s (sekarang %4$d)",
        "scoreboard_players_remove_multiple_success": "Menghapus %1$d dari [%2$s] untuk %3$d entitas",
        "scoreboard_players_reset_success": "Atur ulang skor pemain %1$s",
        "scoreboard_players_resetscore_success": "Atur ulang skor %1$s pemain %2$s",
        "scoreboard_players_set_success": "Mengatur [%1$s] untuk %2$s menjadi %3$d",
        "scoreboard_players_set_multiple_success": "Mengatur [%1$s] untuk %2$d entitas menjadi %3$d",
        "scoreboard_players_set_tagError": "Tidak bisa mengurai dataTag, alasan: %1$s",
        "scoreboard_players_set_tagMismatch": "dataTag tidak cocok untuk %1$s",
        "scoreboard_players_score_notFound": "Skor %1$s untuk %2$s tidak ditemukan",
        "scoreboard_players_test_failed": "Skor %1$d TIDAK dalam rentang %2$d hingga %3$d",
        "scoreboard_players_test_success": "Skor %1$d dalam rentang %2$d hingga %3$d",
        "scoreboard_teamNotFound": "Tim dengan nama '%1$s' tidak ditemukan",
        "scoreboard_teams_add_alreadyExists": "Tim dengan nama '%1$s' sudah ada",
        "scoreboard_teams_add_displayTooLong": "Nama tampilan '%1$s' terlalu panjang untuk tim, panjang maksimum %2$d karakter",
        "scoreboard_teams_add_success": "Berhasil menambahkan tim baru '%1$s'",
        "scoreboard_teams_add_tooLong": "Nama '%1$s' terlalu panjang untuk tim, panjang maksimum %2$d karakter",
        "scoreboard_teams_empty_alreadyEmpty": "Tim %1$s sudah kosong, tidak bisa menghapus pemain yang tidak ada",
        "scoreboard_teams_empty_success": "Menghapus ke-%1$d player dari tim %2$s",
        "scoreboard_teams_join_failure": "Tidak bisa menambahkan %1$d pemain ke tim %2$s: %3$s",
        "scoreboard_teams_join_success": "Menambahkan %1$d pemain ke tim %2$s: %3$s",
        "scoreboard_teams_leave_failure": "Tidak bisa menghapus %1$d pemain dari tim mereka: %2$s",
        "scoreboard_teams_leave_noTeam": "Kamu tidak berada dalam tim",
        "scoreboard_teams_leave_success": "Menghapus %1$d pemain dari tim mereka: %2$s",
        "scoreboard_teams_list_count": "Menampilkan %1$d tim di papan skor:",
        "scoreboard_teams_list_empty": "Tidak ada tim yang terdaftar di papan skor",
        "scoreboard_teams_list_entry": "- %1$s: '%2$s' memiliki %3$d pemain",
        "scoreboard_teams_list_player_count": "Menampilkan %1$d pemain dalam tim %2$s:",
        "scoreboard_teams_list_player_empty": "Tim %1$s tidak memiliki pemain",
        "scoreboard_teams_list_player_entry": "- %2$s: %1$d (%3$s)",
        "scoreboard_teams_option_noValue": "Nilai yang valid untuk opsi %1$s adalah: %2$s",
        "scoreboard_teams_option_success": "Atur opsi %1$s untuk tim %2$s ke %3$s",
        "scoreboard_teams_remove_success": "Menghapus tim %1$s",
        "seed_success": "Benih: %1$s",
        "setblock_description": "Mengubah blok menjadi blok lain.",
        "setblock_failed": "Tidak bisa menempatkan blok",
        "setblock_noChange": "Blok tidak bisa ditempatkan",
        "setblock_notFound": "Tidak ada blok dengan ID/nama %1$s",
        "setblock_outOfWorld": "Tidak bisa menempatkan blok di luar dunia",
        "setblock_success": "Blok ditempatkan",
        "setblock_tagError": "Penguraian tag data gagal: %1$s",
        "setidletimeout_success": "Berhasil mengatur batas waktu diam ke %1$d menit.",
        "setfixedinvslots_description": "Mengatur jumlah slot persediaan tetap untuk server.",
        "setfixedinvslots_success": "Jumlah Slot Persediaan Tetap diatur ke %1$d",
        "setfixedinvslot_description": "Menetapkan slot tetap untuk item tertentu.",
        "setfixedinvslot_success": "Slot Persediaan Tetap %1$d diatur ke %2$s",
        "globalpause_description": "Menetapkan atau mendapatkan status jeda permainan untuk semua pemain.",
        "globalpause_success": "Atur atau dapatkan status jeda",
        "setmaxplayers_description": "Menetapkan jumlah maksimum pemain untuk sesi permainan ini.",
        "setmaxplayers_success": "Tetapkan pemain maks ke %1$d.",
        "setmaxplayers_success_upperbound": "(Dibatasi oleh koneksi maksimum yang dibolehkan)",
        "setmaxplayers_success_lowerbound": "(Dibatasi oleh jumlah pemain saat ini)",
        "setworldspawn_description": "Menetapkan kemunculan dunia.",
        "setworldspawn_success": "Atur titik kemunculan dunia ke (%1$d, %2$d, %3$d)",
        "setworldspawn_wrongDimension": "Kemunculan dunia tidak bisa diatur dalam dimensi ini",
        "spawnpoint_success_single": "Atur titik kemunculan %1$s ke (%2$d, %3$d, %4$d)",
        "spawnpoint_description": "Menetapkan titik kemunculan untuk pemain.",
        "spawnpoint_success_multiple_specific": "Atur titik kemunculan untuk %1$s ke (%2$d, %3$d, %4$d)",
        "spawnpoint_success_multiple_generic": "Atur titik kemunculan untuk %1$s",
        "spawnpoint_wrongDimension": "Titik kemunculan tidak bisa diatur dalam dimensi ini",
        "spreadplayers_description": "Menteleportasi entitas ke lokasi acak.",
        "spreadplayers_failure_players": "Tidak bisa menyebarkan %1$s pemain di sekitar %2$s,%3$s (terlalu banyak pemain untuk ruang - coba gunakan penyebaran maksimal %4$s)",
        "spreadplayers_failure_teams": "Tidak bisa menyebarkan %1$s tim di sekitar %2$s,%3$s (terlalu banyak pemain untuk ruang - coba gunakan penyebaran maksimal %4$s)",
        "spreadplayers_info_players": "(Jarak rata-rata di antara pemain adalah %1$s blok terpisah setelah iterasi %2$s)",
        "spreadplayers_info_teams": "(Jarak rata-rata di antara tim adalah %1$s blok terpisah setelah iterasi %2$s)",
        "spreadplayers_spreading_players": "Menyebarkan blok %2$s pemain %1$s di sekitar %3$s,%4$s (min terpisah %5$s blok)",
        "spreadplayers_spreading_teams": "Menyebarkan blok %2$s tim %1$s di sekitar %3$s,%4$s (min terpisah %5$s blok)",
        "spreadplayers_success_players": "Berhasil menyebarkan pemain %1$s di sekitar %2$s,%3$s",
        "spreadplayers_success_teams": "Berhasil menyebarkan tim %1$s di sekitar %2$s,%3$s",
        "stats_cleared": "Mengosongkan statistik %1$s",
        "stats_failed": "Parameter tidak valid",
        "stats_noCompatibleBlock": "Blok di %1$d, %2$d, %3$d tidak bisa melacak statistik",
        "stats_success": "Menyimpan %1$s statistik di %2$s pada %3$s",
        "stop_description": "Menghentikan server.",
        "stop_start": "Menghentikan server",
        "stopsound_description": "Menghentikan suara.",
        "stopsound_success": "Menghentikan suara %s selama %s",
        "stopsound_success_all": "Menghentikan semua suara selama %s",
        "summon_description": "Memanggil entitas.",
        "summon_failed": "Tidak bisa memanggil objek",
        "summon_outOfWorld": "Tidak bisa memanggil objek dari dunia",
        "summon_success": "Objek berhasil dipanggil",
        "summon_tagError": "Penguraian tag data gagal: %1$s",
        "tag_description": "Mengelola tag yang tersimpan di entitas.",
        "tag_add_failed": "Target sudah memiliki tag atau memiliki terlalu banyak tag",
        "tag_add_success_single": "Menambahkan tag '%1$s' ke %2$s",
        "tag_add_success_multiple": "Menambahkan tag '%1$s' ke entitas %2$d",
        "tag_list_single_empty": "%s tidak memiliki tag",
        "tag_list_single_success": "%1$s memiliki %2$d tag: %3$s",
        "tag_list_multiple_empty": "Tidak ada tag di entitas %d",
        "tag_list_multiple_success": "Entitas %1$d memiliki total %2$d tag: %3$s",
        "tag_remove_failed": "Target tidak memiliki tag ini",
        "tag_remove_success_single": "Menghapus tag '%1$s' dari %2$s",
        "tag_remove_success_multiple": "Menghapus tag '%1$s' dari entitas %2$d",
        "tell_description": "Mengirim pesan pribadi ke satu atau beberapa pemain.",
        "tellraw_description": "Mengirim pesan JSON ke pemain.",
        "tellraw_jsonException": "Json tidak valid: %1$s",
        "tellraw_jsonStringException": "Data string json tidak valid.",
        "tellraw_error_noData": "Tidak ada data yang diberikan.",
        "tellraw_error_notArray": "Objek rawtext harus berisi array. Contoh: \"rawtext\":[{..}]",
        "tellraw_error_textNotString": "bidang teks dalam rawtext harus berisi string. Contoh: \"rawtext\":[{\"text\": \"text to display\"}]",
        "tellraw_error_translateNotString": "bidang terjemahan dalam rawtext harus berisi kunci bahasa. Contoh: \"rawtext\":[{\"translate\": \"gui.ok\"}]",
        "tellraw_error_withNotArrayOrRawText": "dengan kolom dalam rawtext harus berisi larik atau objek rawtext lainnya. Contoh 1: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\": [ \"value1\", \"value2\" ]}]  Contoh 2: \"rawtext\":[{\"translate\": \"chat.type.announcement\", \"with\":{\"rawtext\":[{\"text\": \"value1\"}, {\"text\": \"value2\"}]}}]",
        "tellraw_error_itemIsNotObject": "Nilai json dalam array rawtext bukan merupakan objek. Contoh: \"rawtext\": [{ \"text\" : \"my text\" }]",
        "educlientinfo_description": "Dapatkan ID penyewa dan status host. Ditujukan untuk CM.",
        "testfor_description": "Menghitung entitas (pemain, mob, item, dll.) yang cocok dengan kondisi yang ditetapkan.",
        "testfor_failure": "%1$s tidak cocok dengan struktur data yang diperlukan",
        "testfor_success": "Menemukan %1$s",
        "testfor_tagError": "Penguraian tag data gagal: %1$s",
        "testforblock_description": "Menguji apakah blok tertentu berada di lokasi tertentu.",
        "testforblock_failed_data": "Blok di %1$d,%2$d,%3$d tidak sesuai dengan status blok yang diharapkan.",
        "testforblock_failed_nbt": "Blok di %1$d,%2$d,%3$d tidak memiliki kunci NBT yang diperlukan.",
        "testforblock_failed_tile": "Blok di %1$d,%2$d,%3$d adalah %4$s (diharapkan: %5$s).",
        "testforblock_failed_tileEntity": "Blok di %1$d,%2$d,%3$d bukan entitas ubin dan tidak bisa mendukung pencocokan tag.",
        "testforblock_outOfWorld": "Tidak bisa menguji blok di luar dunia",
        "testforblock_success": "Berhasil menemukan blok di %1$d,%2$d,%3$d.",
        "testforblocks_description": "Menguji apakah blok di dua wilayah cocok.",
        "tickingarea_description": "Menambah, menghapus, atau mencantumkan area ticking.",
        "tickingarea_inuse": "%1$d/%2$d area ticking digunakan.",
        "tickingarea_noneExist_currentDimension": "Tidak ada area ticking dalam dimension saat ini.",
        "tickingarea_add_bounds_success": "Telah menambahkan area ticking dari %1$d ke %2$d.",
        "tickingarea_add_circle_success": "Telah menambahkan area ticking dengan bagian tengah di %1$d dengan radius %2$d gugus.",
        "tickingarea_add_failure": "Jumlah maks. area ticking (%1$d) telah tercapai. Tidak bisa menambahkan area ticking lagi.",
        "tickingarea_add_conflictingname": "Area ticking dengan nama %1$s sudah ada.",
        "tickingarea_add_chunkfailure": "Area ticking berisi lebih dari %1$d gugus, area ticking terlalu besar dan tidak bisa dibuat.",
        "tickingarea_add_radiusfailure": "Radius tidak boleh lebih besar dari %1$d, area ticking terlalu besar dan tidak dapat dibuat.",
        "tickingarea_remove_success": "Telah menghapus area ticking",
        "tickingarea_remove_failure": "Tidak ada area ticking berisi posisi blok %1$d dalam dimensi saat ini.",
        "tickingarea_remove_byname_failure": "Tidak ada area ticking dengan nama %1$s dalam dimensi saat ini.",
        "tickingarea_remove_all_success": "Telah menghapus area ticking",
        "tickingarea_remove_all_failure": "Tidak ada area ticking dalam dimension saat ini.",
        "tickingarea_list_chunks": "gugus",
        "tickingarea_list_circle_radius": "Radius",
        "tickingarea_list_success_currentDimension": "Cantumkan semua area ticking dalam dimensi saat ini",
        "tickingarea_list_success_allDimensions": "Cantumkan semua area ticking di semua dimensi",
        "tickingarea_list_failure_allDimensions": "Tidak ada area ticking dalam dimensi manapun.",
        "tickingarea_list_to": "ke",
        "tickingarea_list_type_circle": "Lingkaran",
        "time_added": "Menambahkan %1$d ke waktu",
        "time_description": "Mengubah atau mengkueri waktu permainan dunia.",
        "time_disabled": "Selalu Siang diaktifkan di level ini.",
        "time_query_day": "Hari adalah %d",
        "time_query_daytime": "Waktu hari adalah %d",
        "time_query_gametime": "Waktu permainan adalah %d",
        "time_set": "Atur waktu menjadi %1$d",
        "time_stop": "Waktu %1$s",
        "title_description": "Mengontrol judul layar.",
        "title_success": "Perintah judul berhasil dijalankan",
        "titleraw_description": "Mengendalikan judul layar dengan pesan JSON.",
        "toggledownfall_description": "Mengalihkan cuaca.",
        "tp_description": "Menteleportasi entitas (pemain, mob, dll.).",
        "tp_notSameDimension": "Tidak bisa menteleportasi karena pemain tidak berada dalam dimensi yang sama",
        "tp_outOfWorld": "Tidak bisa menteleportasi entitas di luar dunia",
        "tp_permission": "Kamu tidak memiliki izin untuk menggunakan perintah slash ini.",
        "tp_safeTeleportFail": "Teleportasi %1$s ke %2$s tidak bisa dilakukan karena area tidak bebas dari blok.",
        "tp_far": "Teleportasi %1$s ke area yang belum dimuat di %2$s tidak bisa dilakukan",
        "tp_success": "Menteleportasikan %1$s ke %2$s",
        "tp_successVictim": "Kamu telah diteleportasi ke %1$s",
        "tp_success_coordinates": "Menteleportasikan %1$s ke %2$s, %3$s, %4$s",
        "transferserver_description": "Mentransfer pemain ke server lain.",
        "transferserver_successful": "Pemain yang ditransfer",
        "transferserver_invalid_port": "Port tidak valid (0-65535)",
        "trigger_description": "Mengatur pemicu untuk diaktifkan.",
        "trigger_disabled": "Pemicu %1$s tidak diaktifkan",
        "trigger_invalidMode": "Mode pemicu tidak valid %1$s",
        "trigger_invalidObjective": "Nama pemicu tidak valid %1$s",
        "trigger_invalidPlayer": "Hanya pemain yang bisa menggunakan perintah /trigger",
        "trigger_success": "Pemicu %1$s berubah dengan %2$s %3$s",
        "unban_failed": "Tidak bisa membatalkan larangan pemain %1$s",
        "unban_success": "Membatalkan larangan pemain %1$s",
        "unbanip_invalid": "Kamu memasukkan alamat IP yang tidak valid",
        "unbanip_success": "Alamat IP %1$s yang dibatalkan larangannya",
        "validategamelighting_description": "Validasi pencahayaan permainan untuk wilayah tertentu",
        "validategamelighting_checkRegionTooBig": "Daerah untuk memeriksa pencahayaan terlalu besar! (%1$d > %2$d)",
        "validategamelighting_outOfWorld": "Tidak dapat memeriksa pencahayaan di luar dunia",
        "weather_clear": "Mengubah ke cuaca cerah",
        "weather_description": "Menetapkan cuaca.",
        "weather_disabled": "Siklus Cuaca tidak diaktifkan di level ini.",
        "weather_query": "Kondisi cuaca: %s",
        "weather_query_clear": "cerah",
        "weather_query_rain": "hujan",
        "weather_query_thunder": "guntur",
        "weather_rain": "Mengubah ke cuaca hujan",
        "weather_thunder": "Mengubah ke hujan dan guntur",
        "whitelist_add_failed": "Tidak bisa menambahkan %1$s ke daftar putih",
        "whitelist_add_success": "Menambahkan %1$s ke daftar putih",
        "whitelist_description": "Mengelola daftar putih server.",
        "whitelist_disabled": "Menonaktifkan daftar putih",
        "whitelist_enabled": "Mengaktifkan daftar putih",
        "whitelist_list": "Ada %1$d (dari %2$d yang terlihat) pemain yang didaftarputihkan:",
        "whitelist_reloaded": "Daftar putih dimuat ulang dari file.",
        "whitelist_remove_failed": "Tidak bisa menghapus %1$s dari daftar putih",
        "whitelist_remove_success": "Menghapus %1$s dari daftar putih",
        "world_age_description": "Mengubah atau meminta info tentang umur dunia (waktu sejak pembuatan).",
        "world_age_added": "Menambahkan %1$d ke umur dunia",
        "world_age_query": "Umur dunia adalah %d",
        "world_age_set": "Menetapkan umur dunia menjadi %1$d",
        "worldborder_center_success": "Atur pusat batas dunia ke %1$s,%2$s",
        "worldborder_damage_amount_success": "Atur jumlah kerusakan batas dunia ke %1$s per blok (dari %2$s per blok)",
        "worldborder_damage_buffer_success": "Atur buffer kerusakan batas dunia ke %1$s blok (dari %2$s blok)",
        "worldborder_get_success": "Batas dunia saat ini selebar %1$s blok",
        "worldborder_set_success": "Atur batas dunia menjadi selebar %1$s blok (dari %2$s blok)",
        "worldborder_setSlowly_grow_success": "Memperluas batas dunia menjadi selebar %1$s blok (naik dari %2$s blok) selama lebih dari %3$s detik",
        "worldborder_setSlowly_shrink_success": "Mempersempit batas dunia menjadi selebar %1$s blok (turun dari %2$s blok) selama lebih dari %3$s detik",
        "worldborder_warning_distance_success": "Atur peringatan batas dunia menjadi sejauh %1$s blok (dari %2$s blok)",
        "worldborder_warning_time_success": "Atur peringatan batas dunia menjadi sejauh %1$s detik (dari %2$s detik)",
        "worldbuilder_description": "Alihkan status Pembangun Dunia untuk pemanggil.",
        "worldbuilder_success": "Status Pembangun Dunia diperbarui menjadi %1$s",
        "wsserver_description": "Mencoba tersambung ke server websocket di URL yang disediakan.",
        "wsserver_invalid_url": "URL server yang diberikan tidak valid",
        "wsserver_request_existing": "Permintaan sambungan lain sedang berjalan",
        "wsserver_request_failed": "Tidak bisa tersambung ke server: %1$s",
        "wsserver_success": "Sambungan dibuat ke server: %1$s",
        "xp_description": "Menambah atau menghapus EXP pemain.",
        "xp_failure_widthdrawXp": "Tidak bisa memberikan poin pengalaman negatif kepada pemain",
        "xp_success": "Memberikan %1$d pengalaman ke %2$s",
        "xp_success_levels": "Memberikan %1$d level ke %2$s",
        "xp_success_negative_levels": "Mengambil %1$d level dari %2$s"
    },
    item:{
        "air": [
            "Udara"
        ],
        "apple": [
            "Apel"
        ],
        "golden_apple": [
            "Apel Emas"
        ],
        "appleenchanted": [
            "Apel Sihir"
        ],
        "armor_stand": [
            "Dudukan Baju Zirah"
        ],
        "arrow": [
            "Panah"
        ],
        "tipped_arrow": [
            "Panah Obat"
        ],
        "banner": [
            "Banner Hitam",
            "Banner Hitam",
            "Banner Merah",
            "Banner Hijau",
            "Banner Cokelat",
            "Banner Biru",
            "Banner Ungu",
            "Banner Sian",
            "Banner Abu-Abu Muda",
            "Banner Abu-Abu",
            "Banner Merah Muda",
            "Banner Limau",
            "Banner Kuning",
            "Banner Biru Muda",
            "Banner Magenta",
            "Banner Oranye",
            "Banner Putih"
        ],
        "bed": [
            "Tempat Tidur",
            "Tempat Tidur Putih",
            "Tempat Tidur Oranye",
            "Tempat Tidur Magenta",
            "Tempat Tidur Biru Muda",
            "Tempat Tidur Kuning",
            "Tempat Tidur Limau",
            "Tempat Tidur Merah Muda",
            "Tempat Tidur Abu-Abu",
            "Tempat Tidur Abu-Abu Muda",
            "Tempat Tidur Sian",
            "Tempat Tidur Ungu",
            "Tempat Tidur Biru",
            "Tempat Tidur Cokelat",
            "Tempat Tidur Hijau",
            "Tempat Tidur Merah",
            "Tempat Tidur Hitam"
        ],
        "bell": [
            "Lonceng"
        ],
        "steak": [
            "Bistik"
        ],
        "beef": [
            "Daging Mentah"
        ],
        "beetroot": [
            "Ubi Bit Merah"
        ],
        "beetroot_soup": [
            "Sup Ubi Bit Merah"
        ],
        "blaze_powder": [
            "Serbuk Kobaran Api"
        ],
        "blaze_rod": [
            "Tongkat Kobaran Api"
        ],
        "boat": [
            "Perahu Ek",
            "Perahu Ek",
            "Perahu Spruce",
            "Perahu Betula",
            "Perahu Rimba",
            "Perahu Akasia",
            "Perahu Ek Gelap"
        ],
        "bone": [
            "Tulang"
        ],
        "book": [
            "Buku"
        ],
        "chainmail_boots": [
            "Sepatu Bot Rantai"
        ],
        "leather_boots": [
            "Sepatu Bot Kulit"
        ],
        "diamond_boots": [
            "Sepatu Bot Berlian"
        ],
        "golden_boots": [
            "Sepatu Bot Emas"
        ],
        "iron_boots": [
            "Sepatu Bot Besi"
        ],
        "bow": [
            "Busur"
        ],
        "bowl": [
            "Mangkuk"
        ],
        "bread": [
            "Roti"
        ],
        "brewing_stand": [
            "Dudukan Peramuan"
        ],
        "brick": [
            "Bata"
        ],
        "bucket": [
            "Ember"
        ],
        "bucketLava": [
            "Ember Lahar"
        ],
        "bucketWater": [
            "Ember Air"
        ],
        "bucketFish": [
            "Ember Kod"
        ],
        "bucketSalmon": [
            "Ember Salmon"
        ],
        "bucketTropical": [
            "Ember Ikan Tropis"
        ],
        "bucketPuffer": [
            "Ember Ikan Buntal"
        ],
        "bucketCustomFish": [
            "Ember"
        ],
        "tropicalColorWhite": [
            "Putih"
        ],
        "tropicalColorOrange": [
            "Oranye"
        ],
        "tropicalColorMagenta": [
            "Magenta"
        ],
        "tropicalColorSky": [
            "Langit"
        ],
        "tropicalColorYellow": [
            "Kuning"
        ],
        "tropicalColorLime": [
            "Limau"
        ],
        "tropicalColorRose": [
            "Mawar"
        ],
        "tropicalColorGray": [
            "Abu-Abu"
        ],
        "tropicalColorSilver": [
            "Perak"
        ],
        "tropicalColorTeal": [
            "Tiil"
        ],
        "tropicalColorPlum": [
            "Prem"
        ],
        "tropicalColorBlue": [
            "Biru"
        ],
        "tropicalColorBrown": [
            "Cokelat"
        ],
        "tropicalColorGreen": [
            "Hijau"
        ],
        "tropicalColorRed": [
            "Merah"
        ],
        "tropicalBodyKobSingle": [
            "Kob %1$s"
        ],
        "tropicalBodySunstreakSingle": [
            "SunStreak %1$s"
        ],
        "tropicalBodySnooperSingle": [
            "Snooper %1$s"
        ],
        "tropicalBodyDasherSingle": [
            "Dasher %1$s"
        ],
        "tropicalBodyBrinelySingle": [
            "Brinely %1$s"
        ],
        "tropicalBodySpottySingle": [
            "Spotty %1$s"
        ],
        "tropicalBodyFlopperSingle": [
            "Flopper %1$s"
        ],
        "tropicalBodyStripeySingle": [
            "Stripey %1$s"
        ],
        "tropicalBodyGlitterSingle": [
            "Glitter %1$s"
        ],
        "tropicalBodyBlockfishSingle": [
            "Blockfish %1$s"
        ],
        "tropicalBodyBettySingle": [
            "Betty %1$s"
        ],
        "tropicalBodyClayfishSingle": [
            "Clayfish %1$s"
        ],
        "tropicalBodyKobMulti": [
            "%1$s-%2$s Kob"
        ],
        "tropicalBodySunstreakMulti": [
            "%1$s-%2$s SunStreak"
        ],
        "tropicalBodySnooperMulti": [
            "%1$s-%2$s Snooper"
        ],
        "tropicalBodyDasherMulti": [
            "%1$s-%2$s Dasher"
        ],
        "tropicalBodyBrinelyMulti": [
            "%1$s-%2$s Brinely"
        ],
        "tropicalBodySpottyMulti": [
            "%1$s-%2$s Spotty"
        ],
        "tropicalBodyFlopperMulti": [
            "%1$s-%2$s Flopper"
        ],
        "tropicalBodyStripeyMulti": [
            "%1$s-%2$s Stripey"
        ],
        "tropicalBodyGlitterMulti": [
            "%1$s-%2$s Glitter"
        ],
        "tropicalBodyBlockfishMulti": [
            "%1$s-%2$s Blockfish"
        ],
        "tropicalBodyBettyMulti": [
            "%1$s-%2$s Betty"
        ],
        "tropicalBodyClayfishMulti": [
            "%1$s-%2$s Clayfish"
        ],
        "tropicalSchoolAnemone": [
            "Anemon"
        ],
        "tropicalSchoolBlackTang": [
            "Black Tang"
        ],
        "tropicalSchoolBlueDory": [
            "Dori Biru"
        ],
        "tropicalSchoolButterflyFish": [
            "Ikan Kupu-Kupu"
        ],
        "tropicalSchoolCichlid": [
            "Cichlid"
        ],
        "tropicalSchoolClownfish": [
            "Ikan Badut"
        ],
        "tropicalSchoolCottonCandyBetta": [
            "Cotton Candy Betta"
        ],
        "tropicalSchoolDottyback": [
            "Dottyback"
        ],
        "tropicalSchoolEmperorRedSnapper": [
            "Ikan Kakap Merah Kaisar"
        ],
        "tropicalSchoolGoatfish": [
            "Goatfish"
        ],
        "tropicalSchoolMoorishIdol": [
            "Moorish Idol"
        ],
        "tropicalSchoolOrnateButterfly": [
            "Ornate Butterfly"
        ],
        "tropicalSchoolParrotfish": [
            "Ikan Kakatua"
        ],
        "tropicalSchoolQueenAngelFish": [
            "Queen Angel Fish"
        ],
        "tropicalSchoolRedCichlid": [
            "Cichlid Merah"
        ],
        "tropicalSchoolRedLippedBlenny": [
            "Blenny Bibir Merah"
        ],
        "tropicalSchoolRedSnapper": [
            "Ikan Kakap Merah"
        ],
        "tropicalSchoolThreadfin": [
            "Threadfin"
        ],
        "tropicalSchoolTomatoClown": [
            "Tomato Clown"
        ],
        "tropicalSchoolTriggerfish": [
            "Triggerfish"
        ],
        "tropicalSchoolYellowTang": [
            "Yellow Tang"
        ],
        "tropicalSchoolYellowtailParrot": [
            "Burung Beo Ekor Kuning"
        ],
        "cake": [
            "Kue"
        ],
        "camera": [
            "Kamera"
        ],
        "golden_carrot": [
            "Wortel Emas"
        ],
        "carrotOnAStick": [
            "Wortel di Tongkat"
        ],
        "warped_fungus_on_a_stick": [
            "Jamur Melengkung pada Tongkat"
        ],
        "carrot": [
            "Wortel"
        ],
        "cauldron": [
            "Kawah"
        ],
        "coal": [
            "Batu Bara",
            null,
            "Arang"
        ],
        "chainmail_chestplate": [
            "Pelat Dada Rantai"
        ],
        "leather_chestplate": [
            "Tunic Kulit"
        ],
        "diamond_chestplate": [
            "Pelat Dada Berlian"
        ],
        "golden_chestplate": [
            "Pelat Dada Emas"
        ],
        "iron_chestplate": [
            "Pelat Dada Besi"
        ],
        "chorus_fruit": [
            "Buah Chorus"
        ],
        "chorus_fruit_popped": [
            "Buah Chorus Pop"
        ],
        "cooked_beef": [
            "Daging Matang"
        ],
        "cooked_chicken": [
            "Ayam Matang"
        ],
        "cooked_porkchop": [
            "Potongan Daging Babi Matang"
        ],
        "chicken": [
            "Ayam Mentah"
        ],
        "clay_ball": [
            "Tanah Liat"
        ],
        "clock": [
            "Jam"
        ],
        "comparator": [
            "Pembanding Batu Merah"
        ],
        "compass": [
            "Kompas"
        ],
        "lodestonecompass": [
            "Kompas Batu Magnet"
        ],
        "cookie": [
            "Kukis"
        ],
        "crossbow": [
            "Busur Silang"
        ],
        "diamond": [
            "Berlian"
        ],
        "repeater": [
            "Pengulang Batu Merah"
        ],
        "acacia_door": [
            "Pintu Akasia"
        ],
        "birch_door": [
            "Pintu Betula"
        ],
        "dark_oak_door": [
            "Pintu Ek Hitam"
        ],
        "iron_door": [
            "Pintu Besi"
        ],
        "jungle_door": [
            "Pintu Rimba"
        ],
        "wooden_door": [
            "Pintu Ek"
        ],
        "spruce_door": [
            "Pintu Spruce"
        ],
        "crimson_door": [
            "Pintu Crimson"
        ],
        "warped_door": [
            "Pintu Melengkung"
        ],
        "dragon_breath": [
            "Napas Naga"
        ],
        "dye": [
            "Kantong Tinta",
            "Kantong Tinta",
            "Pewarna Merah",
            "Pewarna Hijau",
            "Biji Cokelat",
            "Lapis Lazuli",
            "Pewarna Ungu",
            "Pewarna Sian",
            "Pewarna Abu-Abu Muda",
            "Pewarna Abu-Abu",
            "Pewarna Merah Muda",
            "Pewarna Limau",
            "Pewarna Kuning",
            "Pewarna Biru Muda",
            "Pewarna Magenta",
            "Pewarna Oranye",
            "Pakan Tulang",
            "Pewarna Hitam",
            "Pewarna Cokelat",
            "Pewarna Biru",
            "Pewarna Putih"
        ],
        "egg": [
            "Telur"
        ],
        "elytra": [
            "Sayap Elytra"
        ],
        "emerald": [
            "Zamrud"
        ],
        "emptyMap": [
            "Peta Kosong"
        ],
        "emptyLocatorMap": [
            "Peta Pencari Kosong"
        ],
        "emptyPotion": [
            "Botol Air"
        ],
        "enchanted_book": [
            "Buku Sihir"
        ],
        "end_crystal": [
            "Kristal End"
        ],
        "end_rod": [
            "Tongkat End"
        ],
        "ender_eye": [
            "Mata Ender"
        ],
        "ender_pearl": [
            "Mutiara Ender"
        ],
        "experience_bottle": [
            "Botol Sihir"
        ],
        "feather": [
            "Bulu"
        ],
        "fermented_spider_eye": [
            "Mata Laba-Laba Fermentasi"
        ],
        "fireball": [
            "Bom Api"
        ],
        "fireworks": [
            "Roket Kembang Api"
        ],
        "fireworksCharge": [
            "Bintang Kembang Api"
        ],
        "clownfish": [
            "Ikan Tropis"
        ],
        "cooked_fish": [
            "Kod Matang"
        ],
        "fish": [
            "Kod Mentah"
        ],
        "pufferfish": [
            "Ikan Buntal"
        ],
        "cooked_salmon": [
            "Salmon Matang"
        ],
        "salmon": [
            "Salmon Mentah"
        ],
        "fishing_rod": [
            "Tongkat Pancing"
        ],
        "flint": [
            "Batu Api"
        ],
        "flint_and_steel": [
            "Batu Api dan Baja"
        ],
        "flower_pot": [
            "Pot Bunga"
        ],
        "frame": [
            "Bingkai Item"
        ],
        "ghast_tear": [
            "Air Mata Ghast"
        ],
        "glass_bottle": [
            "Botol Kaca"
        ],
        "gold_nugget": [
            "Naget Emas"
        ],
        "iron_nugget": [
            "Naget Besi"
        ],
        "diamond_axe": [
            "Kapak Berlian"
        ],
        "golden_axe": [
            "Kapak Emas"
        ],
        "iron_axe": [
            "Kapak Besi"
        ],
        "stone_axe": [
            "Kapak Batu"
        ],
        "wooden_axe": [
            "Kapak Kayu"
        ],
        "chainmail_helmet": [
            "Helm Rantai"
        ],
        "leather_helmet": [
            "Topi Kulit"
        ],
        "diamond_helmet": [
            "Helm Berlian"
        ],
        "golden_helmet": [
            "Helm Emas"
        ],
        "iron_helmet": [
            "Helm Besi"
        ],
        "diamond_hoe": [
            "Cangkul Berlian"
        ],
        "golden_hoe": [
            "Cangkul Emas"
        ],
        "iron_hoe": [
            "Cangkul Besi"
        ],
        "stone_hoe": [
            "Cangkul Batu"
        ],
        "wooden_hoe": [
            "Cangkul Kayu"
        ],
        "honey_bottle": [
            "Botol Madu"
        ],
        "honeycomb": [
            "Sarang Madu"
        ],
        "horsearmordiamond": [
            "Baju Zirah Kuda Berlian"
        ],
        "horsearmorgold": [
            "Baju Zirah Kuda Emas"
        ],
        "horsearmoriron": [
            "Baju Zirah Kuda Besi"
        ],
        "horsearmorleather": [
            "Baju Zirah Kuda Kulit"
        ],
        "gold_ingot": [
            "Emas Batangan"
        ],
        "iron_ingot": [
            "Besi Batangan"
        ],
        "netherite_ingot": [
            "Batang Logam Netherite"
        ],
        "netherite_scrap": [
            "Kepingan Netherite"
        ],
        "netherite_sword": [
            "Pedang Netherite"
        ],
        "netherite_pickaxe": [
            "Beliung Netherite"
        ],
        "netherite_axe": [
            "Kapak Netherite"
        ],
        "netherite_shovel": [
            "Sekop Netherite"
        ],
        "netherite_hoe": [
            "Cangkul Netherite"
        ],
        "netherite_boots": [
            "Sepatu Bot Netherite"
        ],
        "netherite_leggings": [
            "Legging Netherite"
        ],
        "netherite_chestplate": [
            "Pelat Dada Netherite"
        ],
        "netherite_helmet": [
            "Helm Netherite"
        ],
        "lead": [
            "Tali"
        ],
        "leather": [
            "Kulit"
        ],
        "leaves": [
            "Daun",
            "Daun Ek",
            "Daun Spruce",
            "Daun Betula",
            "Daun Rimba",
            "Daun Akasia",
            "Daun Ek Gelap"
        ],
        "chainmail_leggings": [
            "Celana Ketat Berantai"
        ],
        "leather_leggings": [
            "Celana Kulit"
        ],
        "diamond_leggings": [
            "Celana Ketat Berlian"
        ],
        "golden_leggings": [
            "Celana Ketat Emas"
        ],
        "iron_leggings": [
            "Celana Ketat Besi"
        ],
        "nautilus_shell": [
            "Cangkang Nautilus"
        ],
        "heart_of_the_sea": [
            "Hati Lautan"
        ],
        "magma_cream": [
            "Krim Magma"
        ],
        "map": [
            "Peta"
        ],
        "melon": [
            "Melon"
        ],
        "milk": [
            "Susu"
        ],
        "minecart": [
            "Kereta Tambang"
        ],
        "chest_minecart": [
            "Kereta Tambang dengan Peti"
        ],
        "command_block_minecart": [
            "Kereta Tambang dengan Blok Perintah"
        ],
        "minecartFurnace": [
            "Kereta Tambang dengan Tungku"
        ],
        "hopper_minecart": [
            "Kereta Tambang dengan Penampung"
        ],
        "tnt_minecart": [
            "Kereta Tambang dengan Dinamit"
        ],
        "trident": [
            "Trisula"
        ],
        "mushroom_stew": [
            "Semur Jamur"
        ],
        "muttoncooked": [
            "Daging Domba Matang"
        ],
        "muttonraw": [
            "Daging Domba Mentah"
        ],
        "name_tag": [
            "Tag Nama"
        ],
        "netherbrick": [
            "Bata Nether"
        ],
        "quartz": [
            "Kuarsa Nether"
        ],
        "nether_wart": [
            "Nether Wart"
        ],
        "netherStar": [
            "Bintang Nether"
        ],
        "painting": [
            "Lukisan"
        ],
        "paper": [
            "Kertas"
        ],
        "diamond_pickaxe": [
            "Beliung Berlian"
        ],
        "golden_pickaxe": [
            "Beliung Emas"
        ],
        "iron_pickaxe": [
            "Beliung Besi"
        ],
        "stone_pickaxe": [
            "Beliung Batu"
        ],
        "wooden_pickaxe": [
            "Beliung Kayu"
        ],
        "porkchop_cooked": [
            "Potongan Daging Babi Matang"
        ],
        "porkchop": [
            "Potongan Daging Babi Mentah"
        ],
        "portfolio": [
            "Portofolio"
        ],
        "potato": [
            "Kentang"
        ],
        "baked_potato": [
            "Kentang Panggang"
        ],
        "poisonous_potato": [
            "Kentang Beracun"
        ],
        "potion": [
            "Ramuan"
        ],
        "prismarine_crystals": [
            "Kristal Prismarine"
        ],
        "prismarine_shard": [
            "Pecahan Prismarine"
        ],
        "pumpkin_pie": [
            "Pai labu"
        ],
        "cooked_rabbit": [
            "Kelinci Matang"
        ],
        "rabbit_foot": [
            "Kaki Kelinci"
        ],
        "rabbit_hide": [
            "Kulit Kelinci"
        ],
        "rabbit": [
            "Kelinci Mentah"
        ],
        "rabbit_stew": [
            "Semur Kelinci"
        ],
        "record": [
            "Disk Musik"
        ],
        "redstone": [
            "Batu Merah"
        ],
        "reeds": [
            "Tebu"
        ],
        "kelp": [
            "Rumput Laut"
        ],
        "dried_kelp": [
            "Rumput Laut Kering"
        ],
        "rotten_flesh": [
            "Daging Busuk"
        ],
        "ruby": [
            "Ruby"
        ],
        "saddle": [
            "Pelana"
        ],
        "wheat_seeds": [
            "Benih"
        ],
        "beetroot_seeds": [
            "Benih Ubi Bit Merah"
        ],
        "melon_seeds": [
            "Benih Melon"
        ],
        "pumpkin_seeds": [
            "Benih Labu"
        ],
        "shears": [
            "Gunting"
        ],
        "diamond_shovel": [
            "Sekop Berlian"
        ],
        "golden_shovel": [
            "Sekop Emas"
        ],
        "iron_shovel": [
            "Sekop Besi"
        ],
        "stone_shovel": [
            "Sekop Batu"
        ],
        "wooden_shovel": [
            "Sekop Kayu"
        ],
        "sign": [
            "Tanda Ek"
        ],
        "spruce_sign": [
            "Tanda Spruce"
        ],
        "birch_sign": [
            "Tanda Betula"
        ],
        "jungle_sign": [
            "Tanda Rimba"
        ],
        "acacia_sign": [
            "Tanda Akasia"
        ],
        "darkoak_sign": [
            "Tanda Ek Gelap"
        ],
        "crimson_sign": [
            "Tanda Crimson"
        ],
        "warped_sign": [
            "Tanda Melengkung"
        ],
        "skull": [
            "Kepala Tengkorak",
            "Kepala Tengkorak",
            "Kepala Tengkorak Wither",
            "Kepala Zombie",
            "Kepala",
            "Kepala Creeper",
            "Kepala Naga"
        ],
        "slime_ball": [
            "Bola Lendir"
        ],
        "snowball": [
            "Bola Salju"
        ],
        "speckled_melon": [
            "Melon Berkilau"
        ],
        "spider_eye": [
            "Mata Laba-Laba"
        ],
        "stick": [
            "Tongkat"
        ],
        "string": [
            "Benang"
        ],
        "sugar": [
            "Gula"
        ],
        "gunpowder": [
            "Bubuk Mesiu"
        ],
        "diamond_sword": [
            "Pedang Berlian"
        ],
        "golden_sword": [
            "Pedang Emas"
        ],
        "iron_sword": [
            "Pedang Besi"
        ],
        "stone_sword": [
            "Pedang Batu"
        ],
        "wooden_sword": [
            "Pedang Kayu"
        ],
        "wheat": [
            "Gandum"
        ],
        "writable_book": [
            "Buku & Pena Bulu"
        ],
        "written_book": [
            "Buku Tulis"
        ],
        "glowstone_dust": [
            "Debu Batu Bersinar"
        ],
        "shield": [
            "Perisai"
        ],
        "shulker_shell": [
            "Cangkang Shulker"
        ],
        "totem": [
            "Totem Tak Mati"
        ],
        "turtle_helmet": [
            "Tempurung Kura-kura"
        ],
        "turtle_shell_piece": [
            "Skat"
        ],
        "phantom_membrane": [
            "Membran Hantu"
        ],
        "sweet_berries": [
            "Buah Beri Manis"
        ],
        "suspicious_stew": [
            "Rebusan Mencurigakan"
        ],
        "banner_pattern": [
            "Pola Banner"
        ],
        "acaciaFence": [
            "Pagar Akasia"
        ],
        "acacia_fence_gate": [
            "Gerbang Pagar Akasia"
        ],
        "activator_rail": [
            "Rel Aktivator"
        ],
        "allow": [
            "Bolehkan"
        ],
        "deny": [
            "Tolak"
        ],
        "border_block": [
            "Batas"
        ],
        "anvil": [
            "Paron",
            "Paron",
            null,
            null,
            null,
            "Paron yang Agak Rusak",
            null,
            null,
            null,
            "Paron yang Sangat Rusak"
        ],
        "barrier": [
            "Penghalang"
        ],
        "beacon": [
            "Suar"
        ],
        "beehive": [
            "Rumah Lebah"
        ],
        "bee_nest": [
            "Sarang Lebah"
        ],
        "target": [
            "Target"
        ],
        "bedrock": [
            "Batuan Dasar"
        ],
        "conduit": [
            "Konduit"
        ],
        "invisibleBedrock": [
            "Bedrock Tidak Terlihat"
        ],
        "birchFence": [
            "Pagar Betula"
        ],
        "birch_fence_gate": [
            "Gerbang Pagar Betula"
        ],
        "blast_furnace": [
            "Tanur Tiup"
        ],
        "bone_block": [
            "Blok Tulang"
        ],
        "coal_block": [
            "Blok Batu Bara"
        ],
        "diamond_block": [
            "Blok Berlian"
        ],
        "emerald_block": [
            "Blok Zamrud"
        ],
        "gold_block": [
            "Blok Emas"
        ],
        "iron_block": [
            "Blok Besi"
        ],
        "lapis_block": [
            "Blok Lapis Lazuli"
        ],
        "redstone_block": [
            "Blok Batu Merah"
        ],
        "bookshelf": [
            "Rak Buku"
        ],
        "brick_block": [
            "Blok Bata"
        ],
        "brown_mushroom": [
            "Jamur Cokelat"
        ],
        "wooden_button": [
            "Tombol Ek"
        ],
        "acacia_button": [
            "Tombol Akasia"
        ],
        "birch_button": [
            "Tombol Betula"
        ],
        "dark_oak_button": [
            "Tombol Ek Gelap"
        ],
        "jungle_button": [
            "Tombol Rimba"
        ],
        "spruce_button": [
            "Tombol Spruce"
        ],
        "stone_button": [
            "Tombol Batu"
        ],
        "cactus": [
            "Kaktus"
        ],
        "dried_kelp_block": [
            "Blok Rumput Laut Kering"
        ],
        "carved_pumpkin": [
            "Labu Ukir"
        ],
        "chest": [
            "Peti"
        ],
        "ender_chest": [
            "Peti Ender"
        ],
        "jigsaw": [
            "Blok Jigsaw"
        ],
        "honey_block": [
            "Blok Madu"
        ],
        "honeycomb_block": [
            "Blok Sarang Madu"
        ],
        "lodestone": [
            "Batu Magnet"
        ],
        "nether_sprouts": [
            "Kecambah Nether"
        ],
        "crimson_stem": [
            "Batang Crimson"
        ],
        "warped_stem": [
            "Batang Melengkung"
        ],
        "stripped_crimson_stem": [
            "Batang Crimson Kupas"
        ],
        "stripped_warped_stem": [
            "Batang Melengkung Kupas"
        ],
        "crimson_hyphae": [
            "Hifa Crimson"
        ],
        "warped_hyphae": [
            "Hifa Melengkung"
        ],
        "stripped_crimson_hyphae": [
            "Hifa Crimson Kupas"
        ],
        "stripped_warped_hyphae": [
            "Hifa Melengkung Kupas"
        ],
        "crimson_planks": [
            "Papan Crimson"
        ],
        "warped_planks": [
            "Papan Melengkung"
        ],
        "crimson_trapdoor": [
            "Pintu Perangkap Crimson"
        ],
        "warped_trapdoor": [
            "Pintu Perangkap Melengkung"
        ],
        "crimson_standing_sign": [
            "Tanda Crimson"
        ],
        "warped_standing_sign": [
            "Tanda Melengkung"
        ],
        "crimson_wall_sign": [
            "Tanda Crimson"
        ],
        "warped_wall_sign": [
            "Tanda Melengkung"
        ],
        "crimson_stairs": [
            "Tangga Crimson"
        ],
        "warped_stairs": [
            "Tangga Melengkung"
        ],
        "crimson_fence": [
            "Pagar Crimson"
        ],
        "warped_fence": [
            "Pagar Melengkung"
        ],
        "crimson_fence_gate": [
            "Gerbang Pagar Crimson"
        ],
        "warped_fence_gate": [
            "Gerbang Pagar Melengkung"
        ],
        "crimson_button": [
            "Tombol Crimson"
        ],
        "warped_button": [
            "Tombol Melengkung"
        ],
        "crimson_pressure_plate": [
            "Pelat Tekanan Crimson"
        ],
        "warped_pressure_plate": [
            "Pelat Tekanan Melengkung"
        ],
        "crimson_slab": [
            "Lempeng Crimson"
        ],
        "warped_slab": [
            "Lempeng Melengkung"
        ],
        "crimson_double_slab": [
            "Lempeng Crimson"
        ],
        "warped_double_slab": [
            "Lempeng Melengkung"
        ],
        "shroomlight": [
            "Jamur Menyala"
        ],
        "crimson_nylium": [
            "Nylium Crimson"
        ],
        "warped_nylium": [
            "Nylium Melengkung"
        ],
        "basalt": [
            "Basalt"
        ],
        "polished_basalt": [
            "Basalt Poles"
        ],
        "blackstone": [
            "Blackstone"
        ],
        "polished_blackstone_bricks": [
            "Bata Blackstone Dipoles"
        ],
        "cracked_polished_blackstone_bricks": [
            "Bata Blackstone Dipoles Retak"
        ],
        "polished_blackstone_brick_stairs": [
            "Tangga Bata Blackstone Dipoles"
        ],
        "blackstone_stairs": [
            "Tangga Blackstone"
        ],
        "blackstone_wall": [
            "Dinding Blackstone"
        ],
        "polished_blackstone_brick_wall": [
            "Dinding Bata Blackstone Dipoles"
        ],
        "chiseled_polished_blackstone": [
            "Blackstone Dipoles Dipahat"
        ],
        "gilded_blackstone": [
            "Blackstone Bersepuh"
        ],
        "blackstone_slab": [
            "Lempengan Blackstone"
        ],
        "polished_blackstone_brick_slab": [
            "Lempeng Bata Blackstone Dipoles"
        ],
        "chain": [
            "Rantai"
        ],
        "soul_soil": [
            "Tanah Jiwa"
        ],
        "soul_fire": [
            "Api Jiwa"
        ],
        "polished_blackstone": [
            "Blackstone Dipoles"
        ],
        "polished_blackstone_stairs": [
            "Tangga Blackstone Dipoles"
        ],
        "polished_blackstone_slab": [
            "Lempeng Blackstone Dipoles"
        ],
        "polished_blackstone_pressure_plate": [
            "Pelat Tekanan Blackstone Dipoles"
        ],
        "polished_blackstone_button": [
            "Tombol Blackstone Dipoles"
        ],
        "polished_blackstone_wall": [
            "Dinding Blackstone Dipoles"
        ],
        "soul_campfire": [
            "Api Unggun Jiwa"
        ],
        "chiseled_nether_bricks": [
            "Bata Nether Pahatan"
        ],
        "cracked_nether_bricks": [
            "Bata Nether Retak"
        ],
        "quartz_bricks": [
            "Bata Kuarsa"
        ],
        "trapped_chest": [
            "Peti Perangkap"
        ],
        "shulkerBoxWhite": [
            "Kotak Shulker Putih"
        ],
        "shulkerBoxOrange": [
            "Kotak Shulker Oranye"
        ],
        "shulkerBoxMagenta": [
            "Kotak Shulker Magenta"
        ],
        "shulkerBoxLightBlue": [
            "Kotak Shulker Biru Muda"
        ],
        "shulkerBoxYellow": [
            "Kotak Shulker Kuning"
        ],
        "shulkerBoxLime": [
            "Kotak Shulker Limau"
        ],
        "shulkerBoxPink": [
            "Kotak Shulker Merah Muda"
        ],
        "shulkerBoxGray": [
            "Kotak Shulker Abu-Abu"
        ],
        "shulkerBoxSilver": [
            "Kotak Shulker Abu-Abu Muda"
        ],
        "shulkerBoxCyan": [
            "Kotak Shulker Sian"
        ],
        "shulkerBoxPurple": [
            "Kotak Shulker Ungu"
        ],
        "shulkerBoxBlue": [
            "Kotak Shulker Biru"
        ],
        "shulkerBoxBrown": [
            "Kotak Shulker Cokelat"
        ],
        "shulkerBoxGreen": [
            "Kotak Shulker Hijau"
        ],
        "shulkerBoxRed": [
            "Kotak Shulker Merah"
        ],
        "shulkerBoxBlack": [
            "Kotak Shulker Hitam"
        ],
        "shulkerBox": [
            "Kotak Shulker"
        ],
        "chorus_flower": [
            "Bunga Chorus"
        ],
        "chorus_plant": [
            "Tanaman Chorus"
        ],
        "stained_glass": [
            "Kaca Buram Putih",
            "Kaca Buram Putih",
            "Kaca Buram Oranye",
            "Kaca Buram Magenta",
            "Kaca Buram Biru Muda",
            "Kaca Buram Kuning",
            "Kaca Buram Limau",
            "Kaca Buram Merah Muda",
            "Kaca Buram Abu-Abu",
            "Kaca Buram Abu-Abu Muda",
            "Kaca Buram Sian",
            "Kaca Buram Ungu",
            "Kaca Buram Biru",
            "Kaca Buram Cokelat",
            "Kaca Buram Hijau",
            "Kaca Buram Merah",
            "Kaca Buram Hitam"
        ],
        "stained_glass_pane": [
            "Jendela Kaca Buram Putih",
            "Jendela Kaca Buram Putih",
            "Jendela Kaca Buram Oranye",
            "Jendela Kaca Buram Magenta",
            "Jendela Kaca Buram Biru Muda",
            "Jendela Kaca Buram Kuning",
            "Jendela Kaca Buram Limau",
            "Jendela Kaca Buram Merah Muda",
            "Jendela Kaca Buram Abu-Abu",
            "Jendela Kaca Buram Abu-Abu Muda",
            "Jendela Kaca Buram Sian",
            "Jendela Kaca Buram Ungu",
            "Jendela Kaca Buram Biru",
            "Jendela Kaca Buram Cokelat",
            "Jendela Kaca Buram Hijau",
            "Jendela Kaca Buram Merah",
            "Jendela Kaca Buram Hitam"
        ],
        "clay": [
            "Blok Tanah Liat"
        ],
        "hardened_clay": [
            "Terakota"
        ],
        "stained_hardened_clay": [
            "Terakota",
            "Terakota Putih",
            "Terakota Oranye",
            "Terakota Magenta",
            "Terakota Biru Muda",
            "Terakota Kuning",
            "Terakota Limau",
            "Terakota Merah Muda",
            "Terakota Abu-Abu",
            "Terakota Abu-Abu Muda",
            "Terakota Sian",
            "Terakota Ungu",
            "Terakota Biru",
            "Terakota Cokelat",
            "Terakota Hijau",
            "Terakota Merah",
            "Terakota Hitam"
        ],
        "structure_block": [
            "Blok Struktur"
        ],
        "structure_void": [
            "Kekosongan Struktur"
        ],
        "wool": [
            "Wol",
            "Wol Putih",
            "Wol Oranye",
            "Wol Magenta",
            "Wol Biru Muda",
            "Wol Kuning",
            "Wol Limau",
            "Wol Merah Muda",
            "Wol Abu-Abu",
            "Wol Abu-Abu Muda",
            "Wol Sian",
            "Wol Ungu",
            "Wol Biru",
            "Wol Cokelat",
            "Wol Hijau",
            "Wol Merah",
            "Wol Hitam"
        ],
        "cobblestone_wall": [
            "Dinding Batu Bulat",
            "Dinding Batu Bulat",
            "Dinding Batu Bulat Berlumut",
            "Dinding Granit",
            "Dinding Diorit",
            "Dinding Andesit",
            "Dinding Batu Pasir",
            "Dinding Bata",
            "Dinding Batu Bata",
            "Dinding Batu Bata Berlumut",
            "Dinding Batu Bata End",
            "Dinding Bata Nether",
            "Dinding Prismarine",
            "Dinding Batu Pasir Merah",
            "Dinding Bata Nether Merah"
        ],
        "cocoa": [
            "Biji Cokelat"
        ],
        "command_block": [
            "Blok Perintah"
        ],
        "composter": [
            "Pembuat Kompos"
        ],
        "light_block": [
            "Blok Ringan"
        ],
        "repeating_command_block": [
            "Blok Perintah Berulang"
        ],
        "chain_command_block": [
            "Blok Perintah Rantai"
        ],
        "darkOakFence": [
            "Pagar Ek Gelap"
        ],
        "dark_oak_fence_gate": [
            "Gerbang Pagar Ek Gelap"
        ],
        "daylight_detector": [
            "Sensor Cahaya Surya"
        ],
        "deadbush": [
            "Semak Mati"
        ],
        "detector_rail": [
            "Rel Detektor"
        ],
        "dirt": [
            "Tanah",
            "Tanah",
            "Tanah Kasar"
        ],
        "podzol": [
            "Podsol"
        ],
        "purpur_block": [
            "Blok Purpur",
            "Blok Purpur",
            "Purpur Pahat",
            "Pilar Purpur"
        ],
        "dispenser": [
            "Dispenser"
        ],
        "doorWood": [
            "Pintu Kayu"
        ],
        "double_plant": [
            "Tanaman",
            "Bunga Matahari",
            "Lilac",
            "Rumput Tinggi Ganda",
            "Pakis Besar",
            "Semak Mawar",
            "Peony"
        ],
        "dragon_egg": [
            "Telur Naga"
        ],
        "dropper": [
            "Penyimpan"
        ],
        "enchanting_table": [
            "Meja Sihir"
        ],
        "enderChest": [
            "Peti Ender"
        ],
        "end_portal_frame": [
            "Portal End"
        ],
        "farmland": [
            "Tanah Pertanian"
        ],
        "fletching_table": [
            "Meja Pemasang Sayap Anak Panah"
        ],
        "fence": [
            "Pagar Ek"
        ],
        "fence_gate": [
            "Gerbang Pagar Ek"
        ],
        "iron_bars": [
            "Batang Besi"
        ],
        "fire": [
            "Api"
        ],
        "yellow_flower": [
            "Bunga",
            "Dandelion"
        ],
        "red_flower": [
            "Bunga",
            "Poppy",
            "Anggrek Biru",
            "Allium",
            "Bluet Biru Langit",
            "Tulip Merah",
            "Tulip Oranye",
            "Tulip Putih",
            "Tulip Merah Muda",
            "Oxeye Daisy",
            "Cornflower",
            "Lily of the Valley"
        ],
        "wither_rose": [
            "Mawar Layu"
        ],
        "furnace": [
            "Tungku"
        ],
        "glass": [
            "Kaca"
        ],
        "golden_rail": [
            "Rel Berdaya"
        ],
        "grass": [
            "Blok Rumput"
        ],
        "grass_path": [
            "Jalur Rumput"
        ],
        "gravel": [
            "Kerikil"
        ],
        "hay_block": [
            "Gulungan Jerami"
        ],
        "netherrack": [
            "Netherrack"
        ],
        "soul_sand": [
            "Pasir Jiwa"
        ],
        "hopper": [
            "Penampung"
        ],
        "ice": [
            "Es"
        ],
        "packed_ice": [
            "Es Padat"
        ],
        "blue_ice": [
            "Es Biru"
        ],
        "iron_trapdoor": [
            "Pintu Jebakan Besi"
        ],
        "jukebox": [
            "Jukebox"
        ],
        "jungleFence": [
            "Pagar Rimba"
        ],
        "jungle_fence_gate": [
            "Gerbang Pagar Rimba"
        ],
        "ladder": [
            "Tangga"
        ],
        "flowing_lava": [
            "Lahar"
        ],
        "leaves2": [
            "Daun Akasia",
            "Daun Akasia",
            "Daun Ek Gelap"
        ],
        "lever": [
            "Tuas"
        ],
        "glowstone": [
            "Batu Bersinar"
        ],
        "lit_pumpkin": [
            "Jack o'Lantern"
        ],
        "lockedchest": [
            "Peti Terkunci"
        ],
        "log2": [
            "Batang Akasia",
            "Batang Akasia",
            "Batang Ek Gelap"
        ],
        "log": [
            "Batang",
            "Batang Ek",
            "Batang Spruce",
            "Batang Betula",
            "Batang Rimba"
        ],
        "magma": [
            "Blok Magma"
        ],
        "melon_block": [
            "Melon"
        ],
        "mob_spawner": [
            "Kemunculan Monster"
        ],
        "monster_egg": [
            "Batu Berisi",
            "Batu Berisi",
            "Batu Bulat Berisi",
            "Batu Bata Berisi",
            "Batu Bata Berlumut Berisi",
            "Batu Bata Retak Berisi",
            "Batu Bata Pahatan Berisi"
        ],
        "mushroom": [
            "Jamur"
        ],
        "noteblock": [
            "Blok Not"
        ],
        "mycelium": [
            "Miselium"
        ],
        "nether_brick": [
            "Blok Bata Nether"
        ],
        "red_nether_brick": [
            "Bata Nether Merah"
        ],
        "nether_brick_fence": [
            "Pagar Bata Nether"
        ],
        "quartz_ore": [
            "Bijih Kuarsa Nether"
        ],
        "netherreactor": [
            "Inti Reaktor Nether"
        ],
        "nether_wart_block": [
            "Blok Nether Wart"
        ],
        "warped_wart_block": [
            "Blok Wart Melengkung"
        ],
        "unlit_redstone_torch": [
            "Obor Batu Merah"
        ],
        "redstone_torch": [
            "Obor Batu Merah"
        ],
        "soul_torch": [
            "Obor Jiwa"
        ],
        "obsidian": [
            "Obsidian"
        ],
        "coal_ore": [
            "Bijih Batu Bara"
        ],
        "diamond_ore": [
            "Bijih Berlian"
        ],
        "emerald_ore": [
            "Bijih Zamrud"
        ],
        "gold_ore": [
            "Bijih Emas"
        ],
        "iron_ore": [
            "Bijih Besi"
        ],
        "lapis_ore": [
            "Bijih Lapis Lazuli"
        ],
        "redstone_ore": [
            "Bijih Batu Merah"
        ],
        "oreRuby": [
            "Bijih Ruby"
        ],
        "observer": [
            "Pengamat"
        ],
        "piston": [
            "Piston"
        ],
        "sticky_piston": [
            "Piston Tempel"
        ],
        "portal": [
            "Portal"
        ],
        "potatoes": [
            "Kentang"
        ],
        "stone_pressure_plate": [
            "Pelat Tekanan Batu"
        ],
        "wooden_pressure_plate": [
            "Pelat Tekanan Ek"
        ],
        "acacia_pressure_plate": [
            "Pelat Tekanan Akasia"
        ],
        "birch_pressure_plate": [
            "Pelat Tekanan Betula"
        ],
        "dark_oak_pressure_plate": [
            "Pelat Tekanan Ek Gelap"
        ],
        "jungle_pressure_plate": [
            "Pelat Tekanan Rimba"
        ],
        "spruce_pressure_plate": [
            "Pelat Tekanan Spruce"
        ],
        "prismarine": [
            "Prismarine",
            "Prismarine",
            "Bata Prismarine",
            "Prismarine Gelap"
        ],
        "pumpkin": [
            "Labu"
        ],
        "pumpkin_stem": [
            "Batang Labu"
        ],
        "quartz_block": [
            "Blok Kuarsa",
            "Blok Kuarsa",
            "Blok Kuarsa Pahatan",
            "Blok Kuarsa Pilar",
            "Blok Kuarsa Halus"
        ],
        "rail": [
            "Rel"
        ],
        "red_mushroom": [
            "Jamur Merah"
        ],
        "crimson_fungus": [
            "Cendawan Crimson"
        ],
        "warped_fungus": [
            "Cendawan Melengkung"
        ],
        "red_mushroom_block": [
            "Blok Jamur Merah"
        ],
        "red_sandstone": [
            "Batu Pasir Merah",
            "Batu Pasir Merah",
            "Batu Pasir Merah Pahatan",
            "Potongan Batu Pasir Merah",
            "Batu Pasir Merah Halus"
        ],
        "redstone_wire": [
            "Debu Batu Merah"
        ],
        "redstone_lamp": [
            "Lampu Batu Merah"
        ],
        "sand": [
            "Pasir",
            "Pasir",
            "Pasir Merah"
        ],
        "sandstone": [
            "Batu Pasir",
            "Batu Pasir",
            "Batu Pasir Pahatan",
            "Potongan Batu Pasir",
            "Batu Pasir Halus"
        ],
        "sapling": [
            "Pohon Muda Ek",
            "Pohon Muda Ek",
            "Pohon Muda Spruce",
            "Pohon Muda Betula",
            "Pohon Muda Rimba",
            "Pohon Muda Akasia",
            "Pohon Muda Ek Gelap"
        ],
        "seaLantern": [
            "Lentera Laut"
        ],
        "standing_sign": [
            "Tanda"
        ],
        "spruce_standing_sign": [
            "Tanda Spruce"
        ],
        "birch_standing_sign": [
            "Tanda Betula"
        ],
        "jungle_standing_sign": [
            "Tanda Rimba"
        ],
        "acacia_standing_sign": [
            "Tanda Akasia"
        ],
        "darkoak_standing_sign": [
            "Tanda Ek Gelap"
        ],
        "slime": [
            "Blok Slime"
        ],
        "snow": [
            "Salju"
        ],
        "sponge": [
            "Spons",
            "Spons",
            "Spons Basah"
        ],
        "spruceFence": [
            "Pagar Spruce"
        ],
        "spruce_fence_gate": [
            "Gerbang Pagar Spruce"
        ],
        "brick_stairs": [
            "Tangga Bata"
        ],
        "nether_brick_stairs": [
            "Tangga Bata Nether"
        ],
        "quartz_stairs": [
            "Tangga Kuarsa"
        ],
        "smooth_quartz_stairs": [
            "Tangga Kuarsa Halus"
        ],
        "red_sandstone_stairs": [
            "Tangga Batu Pasir Merah"
        ],
        "sandstone_stairs": [
            "Tangga Batu Pasir"
        ],
        "stone_stairs": [
            "Tangga Batu Bulat"
        ],
        "normal_stone_stairs": [
            "Tangga Batu"
        ],
        "stone_brick_stairs": [
            "Tangga Batu Bata"
        ],
        "oak_stairs": [
            "Tangga Kayu Ek"
        ],
        "acacia_stairs": [
            "Tangga Kayu Akasia"
        ],
        "birch_stairs": [
            "Tangga Kayu Betula"
        ],
        "dark_oak_stairs": [
            "Tangga Kayu Ek Gelap"
        ],
        "jungle_stairs": [
            "Tangga Kayu Rimba"
        ],
        "spruce_stairs": [
            "Tangga Kayu Spruce"
        ],
        "purpur_stairs": [
            "Tangga Purpur"
        ],
        "prismarine_stairs": [
            "Tangga Prismarine"
        ],
        "dark_prismarine_stairs": [
            "Tangga Prismarine Gelap"
        ],
        "prismarine_bricks_stairs": [
            "Tangga Bata Prismarine"
        ],
        "granite_stairs": [
            "Tangga Granit"
        ],
        "diorite_stairs": [
            "Tangga Diorit"
        ],
        "andesite_stairs": [
            "Tangga Andesit"
        ],
        "polished_granite_stairs": [
            "Tangga Granit Polesan"
        ],
        "polished_diorite_stairs": [
            "Tangga Diorit Polesan"
        ],
        "polished_andesite_stairs": [
            "Tangga Andesit Polesan"
        ],
        "mossy_stone_brick_stairs": [
            "Tangga Batu Bata Berlumut"
        ],
        "smooth_red_sandstone_stairs": [
            "Tangga Batu Pasir Merah Halus"
        ],
        "smooth_sandstone_stairs": [
            "Tangga Batu Pasir Halus"
        ],
        "end_brick_stairs": [
            "Tangga Batu Bata End"
        ],
        "mossy_cobblestone_stairs": [
            "Tangga Batu Bulat Berlumut"
        ],
        "red_nether_brick_stairs": [
            "Tangga Bata Nether Merah"
        ],
        "smooth_stone": [
            "Batu Halus"
        ],
        "standing_banner": [
            "Banner",
            "Banner Hitam",
            "Banner Merah",
            "Banner Hijau",
            "Banner Cokelat",
            "Banner Biru",
            "Banner Ungu",
            "Banner Sian",
            "Banner Abu-Abu Muda",
            "Banner Abu-Abu",
            "Banner Merah Muda",
            "Banner Limau",
            "Banner Kuning",
            "Banner Biru Muda",
            "Banner Magenta",
            "Banner Oranye",
            "Banner"
        ],
        "stone": [
            "Batu",
            "Batu",
            "Granit",
            "Granit Polesan",
            "Diorit",
            "Diorit Polesan",
            "Andesit",
            "Andesit Polesan"
        ],
        "cobblestone": [
            "Batu Bulat"
        ],
        "stonebrick": [
            "Batu Bata",
            "Batu Bata",
            "Batu Bata Berlumut",
            "Batu Bata Pahatan"
        ],
        "stonecutter": [
            "Pemahat Batu"
        ],
        "stonecutter_block": [
            "Pemahat Batu"
        ],
        "mossy_cobblestone": [
            "Batu Bulat Berlumut"
        ],
        "double_stone_slab": [
            "Lempeng Batu",
            "Lempeng Batu",
            "Lempeng Batu Pasir",
            "Lempeng Kayu",
            "Lempeng Batu Bulat",
            "Lempeng Bata",
            "Lempeng Batu Bata",
            "Lempeng Kuarsa",
            "Lempeng Bata Nether"
        ],
        "stone_slab": [
            "Lempeng Batu",
            "Lempeng Batu Halus",
            "Lempeng Batu Pasir",
            "Lempeng Kayu",
            "Lempeng Batu Bulat",
            "Lempeng Bata",
            "Lempeng Batu Bata",
            "Lempeng Kuarsa",
            "Lempeng Bata Nether"
        ],
        "double_stone_slab2": [
            "Lempeng Batu Pasir Merah",
            "Lempeng Batu Pasir Merah"
        ],
        "stone_slab2": [
            "Lempeng Batu Pasir Merah",
            "Lempeng Batu Pasir Merah",
            "Lempeng Purpur",
            "Lempeng Prismarine",
            "Lempeng Bata Prismarine",
            "Lempeng Prismarine Gelap",
            "Lempeng Batu Bulat Berlumut",
            "Lempeng Batu Pasir Halus",
            "Lempeng Bata Nether Merah"
        ],
        "stone_slab3": [
            "Lempeng Batu Bata End",
            "Lempeng Batu Bata End",
            "Lempeng Batu Pasir Merah Halus",
            "Lempeng Andesit Polesan",
            "Lempeng Andesit",
            "Lempeng Diorit",
            "Lempeng Diorit Polesan",
            "Lempeng Granit",
            "Lempeng Granit Polesan"
        ],
        "stone_slab4": [
            "Lempeng Batu Bata Berlumut",
            "Lempeng Batu Bata Berlumut",
            "Lempeng Kuarsa Halus",
            "Lempeng Batu",
            "Potongan Lempeng Batu Pasir",
            "Potongan Lempeng Batu Pasir Merah"
        ],
        "coral_block": [
            "Blok Koral Tabung",
            "Blok Koral Tabung",
            "Blok Koral Otak",
            "Blok Koral Gelembung",
            "Blok Koral Api",
            "Blok Koral Tanduk",
            "Blok Koral Tabung Mati",
            "Blok Koral Otak Mati",
            "Blok Koral Gelembung Mati",
            "Blok Koral Api Mati",
            "Blok Koral Tanduk Mati"
        ],
        "tallgrass": [
            "Rumput",
            "Rumput",
            "Pakis"
        ],
        "seagrass": [
            "Lamun",
            "Lamun"
        ],
        "sea_pickle": [
            "Teripang"
        ],
        "turtle_egg": [
            "Tukik Penyu"
        ],
        "coral": [
            "Koral Tabung",
            "Koral Tabung",
            "Koral Otak",
            "Koral Gelembung",
            "Koral Api",
            "Koral Tanduk",
            "Koral Tabung Mati",
            "Koral Otak Mati",
            "Koral Gelembung Mati",
            "Koral Api Mati",
            "Koral Tanduk Mati"
        ],
        "coral_fan": [
            "Koral Kipas Tabung",
            "Koral Kipas Tabung",
            "Koral Kipas Otak",
            "Koral Kipas Gelembung",
            "Koral Kipas Api",
            "Koral Kipas Tanduk"
        ],
        "coral_fan_dead": [
            "Koral Kipas Tabung Mati",
            "Koral Kipas Tabung Mati",
            "Koral Kipas Otak Mati",
            "Koral Kipas Gelembung Mati",
            "Koral Kipas Api Mati",
            "Koral Kipas Tanduk Mati"
        ],
        "glass_pane": [
            "Kaca Jendela"
        ],
        "tnt": [
            "Dinamit"
        ],
        "snow_layer": [
            "Salju Atas"
        ],
        "torch": [
            "Obor"
        ],
        "trapdoor": [
            "Pintu Perangkap Ek"
        ],
        "acacia_trapdoor": [
            "Pintu Perangkap Akasia"
        ],
        "birch_trapdoor": [
            "Pintu Perangkap Betula"
        ],
        "dark_oak_trapdoor": [
            "Pintu Perangkap Ek Gelap"
        ],
        "jungle_trapdoor": [
            "Pintu Perangkap Rimba"
        ],
        "spruce_trapdoor": [
            "Pintu Perangkap Spruce"
        ],
        "tripWire": [
            "Kawat Pemicu"
        ],
        "tripwire_hook": [
            "Kait Kawat Pemicu"
        ],
        "vine": [
            "Tanaman Rambat"
        ],
        "weeping_vines": [
            "Tanaman Merambat Menangis"
        ],
        "twisting_vines": [
            "Tanaman Merambat Melilit"
        ],
        "flowing_water": [
            "Air"
        ],
        "water": [
            "Air"
        ],
        "waterlily": [
            "Teratai"
        ],
        "web": [
            "Jaring Laba-Laba"
        ],
        "heavy_weighted_pressure_plate": [
            "Pelat Tekanan Berbobot (Berat)"
        ],
        "light_weighted_pressure_plate": [
            "Pelat Tekanan Berbobot (Ringan)"
        ],
        "end_stone": [
            "Batu End"
        ],
        "end_bricks": [
            "Batu Bata End"
        ],
        "planks": [
            "Papan Kayu",
            "Papan Kayu Ek",
            "Papan Kayu Spruce",
            "Papan Kayu Betula",
            "Papan Kayu Rimba",
            "Papan Kayu Akasia",
            "Papan Kayu Ek Gelap"
        ],
        "wooden_slab": [
            "Lempeng Kayu",
            "Lempeng Kayu Ek",
            "Lempeng Kayu Spruce",
            "Lempeng Kayu Betula",
            "Lempeng Kayu Rimba",
            "Lempeng Kayu Akasia",
            "Lempeng Kayu Ek Gelap"
        ],
        "carpet": [
            "Karpet",
            "Karpet Hitam",
            "Karpet Merah",
            "Karpet Hijau",
            "Karpet Cokelat",
            "Karpet Biru",
            "Karpet Ungu",
            "Karpet Sian",
            "Karpet Abu-Abu Muda",
            "Karpet Abu-Abu",
            "Karpet Merah Muda",
            "Karpet Limau",
            "Karpet Kuning",
            "Karpet Biru Muda",
            "Karpet Magenta",
            "Karpet Oranye",
            "Karpet Putih"
        ],
        "crafting_table": [
            "Meja Pembuatan"
        ],
        "white_glazed_terracotta": [
            "Terakota Mengkilap Putih",
            "Terakota Mengkilap Putih"
        ],
        "orange_glazed_terracotta": [
            "Terakota Mengkilap Oranye",
            "Terakota Mengkilap Oranye"
        ],
        "magenta_glazed_terracotta": [
            "Terakota Mengkilap Magenta",
            "Terakota Mengkilap Magenta"
        ],
        "light_blue_glazed_terracotta": [
            "Terakota Mengkilap Biru Muda",
            "Terakota Mengkilap Biru Muda"
        ],
        "yellow_glazed_terracotta": [
            "Terakota Mengkilap Kuning",
            "Terakota Mengkilap Kuning"
        ],
        "lime_glazed_terracotta": [
            "Terakota Mengkilap Limau",
            "Terakota Mengkilap Limau"
        ],
        "pink_glazed_terracotta": [
            "Terakota Mengkilap Merah Muda",
            "Terakota Mengkilap Merah Muda"
        ],
        "gray_glazed_terracotta": [
            "Terakota Mengkilap Abu-Abu",
            "Terakota Mengkilap Abu-Abu"
        ],
        "silver_glazed_terracotta": [
            "Terakota Mengkilap Abu-Abu Muda",
            "Terakota Mengkilap Abu-Abu Muda"
        ],
        "cyan_glazed_terracotta": [
            "Terakota Mengkilap Sian",
            "Terakota Mengkilap Sian"
        ],
        "purple_glazed_terracotta": [
            "Terakota Mengkilap Ungu",
            "Terakota Mengkilap Ungu"
        ],
        "blue_glazed_terracotta": [
            "Terakota Mengkilap Biru",
            "Terakota Mengkilap Biru"
        ],
        "brown_glazed_terracotta": [
            "Terakota Mengkilap Cokelat",
            "Terakota Mengkilap Cokelat"
        ],
        "green_glazed_terracotta": [
            "Terakota Mengkilap Hijau",
            "Terakota Mengkilap Hijau"
        ],
        "red_glazed_terracotta": [
            "Terakota Mengkilap Merah",
            "Terakota Mengkilap Merah"
        ],
        "black_glazed_terracotta": [
            "Terakota Mengkilap Hitam",
            "Terakota Mengkilap Hitam"
        ],
        "concrete": [
            "Beton Putih",
            "Beton Putih",
            "Beton Oranye",
            "Beton Magenta",
            "Beton Biru Muda",
            "Beton Kuning",
            "Beton Limau",
            "Beton Merah Muda",
            "Beton Abu-Abu",
            "Beton Abu-Abu Muda",
            "Beton Sian",
            "Beton Ungu",
            "Beton Biru",
            "Beton Cokelat",
            "Beton Hijau",
            "Beton Merah",
            "Beton Hitam"
        ],
        "glazedTerracottaWhite": [
            "Terakota Mengkilap Putih"
        ],
        "glazedTerracottaOrange": [
            "Terakota Mengkilap Oranye"
        ],
        "glazedTerracottaMagenta": [
            "Terakota Mengkilap Magenta"
        ],
        "glazedTerracottaLightBlue": [
            "Terakota Mengkilap Biru Muda"
        ],
        "glazedTerracottaYellow": [
            "Terakota Mengkilap Kuning"
        ],
        "glazedTerracottaLime": [
            "Terakota Mengkilap Limau"
        ],
        "glazedTerracottaPink": [
            "Terakota Mengkilap Merah Muda"
        ],
        "glazedTerracottaGray": [
            "Terakota Mengkilap Abu-Abu"
        ],
        "glazedTerracottaSilver": [
            "Terakota Mengkilap Abu-Abu Muda"
        ],
        "glazedTerracottaCyan": [
            "Terakota Mengkilap Sian"
        ],
        "glazedTerracottaPurple": [
            "Terakota Mengkilap Ungu"
        ],
        "glazedTerracottaBlue": [
            "Terakota Mengkilap Biru"
        ],
        "glazedTerracottaBrown": [
            "Terakota Mengkilap Cokelat"
        ],
        "glazedTerracottaGreen": [
            "Terakota Mengkilap Hijau"
        ],
        "glazedTerracottaRed": [
            "Terakota Mengkilap Merah"
        ],
        "glazedTerracottaBlack": [
            "Terakota Mengkilap Hitam"
        ],
        "concretePowder": [
            "Serbuk Beton Putih",
            "Serbuk Beton Putih",
            "Serbuk Beton Oranye",
            "Serbuk Beton Magenta",
            "Serbuk Beton Biru Muda",
            "Serbuk Beton Kuning",
            "Serbuk Beton Limau",
            "Serbuk Beton Merah Muda",
            "Serbuk Beton Abu-Abu",
            "Serbuk Beton Abu-Abu Muda",
            "Serbuk Beton Sian",
            "Serbuk Beton Ungu",
            "Serbuk Beton Biru",
            "Serbuk Beton Cokelat",
            "Serbuk Beton Hijau",
            "Serbuk Beton Merah",
            "Serbuk Beton Hitam"
        ],
        "stripped_spruce_log": [
            "Batang Spruce Bersetrip"
        ],
        "stripped_dark_oak_log": [
            "Batang Ek Gelap Bersetrip"
        ],
        "stripped_birch_log": [
            "Batang Betula Bersetrip"
        ],
        "stripped_jungle_log": [
            "Batang Rimba Bersetrip"
        ],
        "stripped_oak_log": [
            "Batang Ek Bersetrip"
        ],
        "stripped_acacia_log": [
            "Batang Akasia Bersetrip"
        ],
        "bamboo": [
            "Bambu"
        ],
        "scaffolding": [
            "Perancah"
        ],
        "grindstone": [
            "Batu Asah"
        ],
        "cartography_table": [
            "Meja Kartografi"
        ],
        "lantern": [
            "Lentera"
        ],
        "soul_lantern": [
            "Lentera Jiwa"
        ],
        "smoker": [
            "Tungku Asap"
        ],
        "smithing_table": [
            "Meja Tempa"
        ],
        "barrel": [
            "Tong"
        ],
        "campfire": [
            "Api Unggun"
        ],
        "loom": [
            "Alat Tenun"
        ],
        "lectern": [
            "Podium"
        ],
        "sweet_berry_bush": [
            "Semak Buah Beri Manis"
        ],
        "wood": [
            "Kayu Ek",
            "Kayu Ek",
            "Kayu Spruce",
            "Kayu Betula",
            "Kayu Rimba",
            "Kayu Akasia",
            "Kayu Ek Gelap",
            null,
            null,
            "Kayu Ek Bersetrip",
            "Kayu Spruce Bersetrip",
            "Kayu Betula Bersetrip",
            "Kayu Rimba Bersetrip",
            "Kayu Akasia Bersetrip",
            "Kayu Ek Gelap Bersetrip"
        ],
        "netherite_block": [
            "Blok Netherite"
        ],
        "ancient_debris": [
            "Puing Kuno"
        ],
        "nether_gold_ore": [
            "Bijih Emas Nether"
        ],
        "respawn_anchor": [
            "Munculkan Kembali Jangkar"
        ],
        "crying_obsidian": [
            "Obsidian Menangis"
        ]
    }
};
freeze(lang_data);
export = lang_data;
