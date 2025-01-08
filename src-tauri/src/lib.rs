use tauri::Manager;

const JS_CODE: &str = include_str!("inject.js");

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let webview = app.get_webview_window("main").unwrap();
            webview.eval(JS_CODE)?;
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
