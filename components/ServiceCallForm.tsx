# 1. Installer les outils nécessaires
npm install -g create-next-app

# 2. Créer un nouveau projet Next.js
npx create-next-app@latest mb-comm-service --typescript --tailwind --eslint
cd mb-comm-service

# 3. Installer les dépendances nécessaires
npm install @radix-ui/react-slot
npm install @radix-ui/react-label
npm install class-variance-authority
npm install clsx
npm install lucide-react
npm install tailwind-merge
npm install @radix-ui/react-textarea
npm install @shadcn/ui

# 4. Configurer shadcn/ui
npx shadcn-ui@latest init

# 5. Installer les composants nécessaires
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea

# 6. Structure des fichiers
mkdir -p app/components
touch app/components/ServiceCallForm.tsx

# 7. Git setup
git init
git add .
git commit -m "Initial commit"
