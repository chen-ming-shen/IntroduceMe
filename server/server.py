import os
import http.server
import socketserver

os.chdir("./")   # 切换到 html 目录
PORT = 2026
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving from {os.getcwd()} at port {PORT}")
    httpd.serve_forever()
