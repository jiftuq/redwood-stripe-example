# Migration `20200625213156-add-auth-id-to-user`

This migration has been generated by Terris Kremer at 6/25/2020, 9:31:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "authId" text  NOT NULL ;

CREATE UNIQUE INDEX "User.authId" ON "public"."User"("authId")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200625121527-add-users..20200625213156-add-auth-id-to-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,17 +1,17 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
   binaryTargets = env("BINARY_TARGET")
 }
-// Define your own datamodels here and run `yarn redwood db save` to create
-// migrations for them.
-// TODO: Please remove the following example:
+// Models
+
 model User {
   id    Int     @id @default(autoincrement())
   email String  @unique
+  authId String @unique
 }
```


