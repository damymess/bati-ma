import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20260328153158 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "project_request" ("id" text not null, "client_name" text not null, "client_email" text not null, "client_phone" text null, "architect_profile_id" text null, "title" text not null, "description" text not null, "project_type" text not null, "location" text not null, "address" text null, "budget_min" integer null, "budget_max" integer null, "timeline" text null, "status" text not null default 'submitted', "architect_response" text null, "proposed_fee" integer null, "source" text not null default 'website', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "project_request_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_project_request_deleted_at" ON "project_request" ("deleted_at") WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "project_request" cascade;`);
  }

}
