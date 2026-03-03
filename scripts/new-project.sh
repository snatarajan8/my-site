#!/bin/bash
set -e

TITLE="$1"

if [ -z "$TITLE" ]; then
  echo "Usage: $0 \"Project Title\""
  exit 1
fi

REPO="/home/shyam/Shyam/Work/my-site"

SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
COMPONENT=$(echo "$TITLE" | sed 's/[^a-zA-Z0-9 ]//g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2); print}' | tr -d ' ')
DATE=$(date '+%B %-d, %Y')
DATE_ISO=$(date '+%Y-%m-%d')
FILE="$REPO/src/app/projects/$SLUG/page.tsx"
META="$REPO/src/app/projects/$SLUG/meta.json"

if [ -f "$FILE" ]; then
  echo "Error: $FILE already exists."
  exit 1
fi

mkdir -p "$(dirname "$FILE")"

cat > "$FILE" <<EOF
export default function ${COMPONENT}() {
  return (
    <article className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
        Project
      </p>
      <h1 className="mt-2 text-2xl font-bold text-zinc-800">
        ${TITLE}
      </h1>
      <p className="mt-1 text-sm text-zinc-400">${DATE}</p>
      <div className="mt-8 text-zinc-600 leading-relaxed">
        {/* Write your content here */}
      </div>
    </article>
  );
}
EOF

cat > "$META" <<EOF
{
  "title": "${TITLE}",
  "date": "${DATE}",
  "dateISO": "${DATE_ISO}"
}
EOF

echo "Created: src/app/projects/$SLUG/page.tsx"
