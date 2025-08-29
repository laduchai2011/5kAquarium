# Sử dụng image Node.js chính thức
FROM node:18-alpine

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Sao chép package.json và package-lock.json trước
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Build TypeScript sang JavaScript
RUN npm run build

# Mở port (nếu app chạy trên 3000)
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "dist/index.js"]