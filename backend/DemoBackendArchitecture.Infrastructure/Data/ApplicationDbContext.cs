﻿using DemoBackendArchitecture.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace DemoBackendArchitecture.Infrastructure.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; init; } = null!;
    public DbSet<Role> Roles { get; init; } = null!;
    public DbSet<Product> Products { get; init; } = null!;
    public DbSet<RefreshToken> RefreshTokens { get; init; } = null!;
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }
}