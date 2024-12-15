using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VirtualCharacter.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class FirstCharacterMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SkinId",
                table: "Characters",
                newName: "HairId");

            migrationBuilder.AddColumn<bool>(
                name: "isEditingForOtherEnabled",
                table: "Characters",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isEditingForOtherEnabled",
                table: "Characters");

            migrationBuilder.RenameColumn(
                name: "HairId",
                table: "Characters",
                newName: "SkinId");
        }
    }
}
