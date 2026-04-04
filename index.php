<?php
$buildIndexPath = __DIR__ . '/frontend/build/index.html';

if (!file_exists($buildIndexPath)) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=UTF-8');
    echo "No se ha encontrado frontend/build/index.html. Ejecuta primero el build del frontend.";
    exit;
}

$html = file_get_contents($buildIndexPath);

if ($html === false) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=UTF-8');
    echo "No se pudo leer el build del frontend.";
    exit;
}

$publicBase = rtrim(dirname($_SERVER['SCRIPT_NAME'] ?? ''), '/\\');
$assetBase = ($publicBase === '' ? '' : $publicBase) . '/frontend/build';

$replacements = [
    'href="/favicon.png"' => 'href="' . $assetBase . '/favicon.png"',
    'src="/static/' => 'src="' . $assetBase . '/static/',
    'href="/static/' => 'href="' . $assetBase . '/static/',
];

$html = strtr($html, $replacements);

header('Content-Type: text/html; charset=UTF-8');
echo $html;
?>
